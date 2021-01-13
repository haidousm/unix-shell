<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>Hello!</h1>
    <input type="text" name="cmd-input" id="cmd-input">
    <script>
        const cmdSubmitted = (cmd) => {

            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    console.log(this.response);
                }
            };
            xhttp.open("POST", "handle_request.php", true);
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhttp.send("cmd=" + cmd);
        }

        cmdSubmitted("hello");
    </script>
</body>

</html>