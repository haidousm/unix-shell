<?php


if (isset($_POST["cmd"])) {

    $cmd = $_POST["cmd"];

    $output = NULL;
    exec('demo-shell "' . $cmd . '"', $output);
    $res = '"';
    foreach ($output as $key => $line) {
        if ($key == 0) {
            $res .=  $line . '"';
        } else {

            $res .= ',"' . $line . '"';
        }
    }


    echo $res;
}
