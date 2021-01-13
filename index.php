<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>Hello!</h1>

    <?php
    $output = NULL;
    exec('demo-shell "ls -al"', $output);
    foreach ($output as $line) {
        echo "<p>$line</p>";
    }

    ?>
</body>

</html>