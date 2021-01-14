const history = [];
const cmdSubmitted = (cmd) => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            shellOutputLines = JSON.parse("[" + this.response + "]");
            printResponse(cmd, shellOutputLines);
        }
    };
    xhttp.open(
        "POST",
        "http://terminal:8888/shell-demo/php/handle_request.php",
        true
    );
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    formattedCmd = encodeURIComponent(cmd);
    xhttp.send("cmd=" + formattedCmd);
};

const printResponse = (cmd, shellOutputLines) => {
    for (var i = 0; i < shellOutputLines.length; i++) {
        const pTag = document.createElement("p");
        pTag.innerHTML = shellOutputLines[i];
        document
            .getElementsByClassName("output-container")[0]
            .appendChild(pTag);
    }
};

document.getElementsByClassName("cmd-input")[0].onkeyup = function (e) {
    if (e.key === "Enter" || e.keyCode === 13) {
        let cmd = e.target.value;
        const pTag = document.createElement("p");
        pTag.innerHTML = " moussa@Moussas-MacBook-Pro $ " + cmd;
        document
            .getElementsByClassName("output-container")[0]
            .appendChild(pTag);

        updateScroll();

        if (cmd == "clear") {
            document.getElementsByClassName("output-container")[0].innerHTML =
                "";
            history.push(cmd);
        } else if (cmd == "history") {
            printResponse(cmd, history);
        } else {
            cmdSubmitted(cmd);
            history.push(cmd);
        }
        e.target.value = "";
    }
};

function updateScroll() {
    var element = document.getElementsByClassName("terminal-container")[0];
    element.scrollTop = element.scrollHeight;
}
