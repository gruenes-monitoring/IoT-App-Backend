<?php
function tailLog($file, $lines = 1)
{
    return trim(implode("<br>", array_slice($file, -$lines)));
}

//if(!array_key_exists("file", $_POST))
//    echo "NO FILENAME";
//else
//    echo "file was given";
//echo "PHP Received data: ~~" . array_keys($_POST). "~~";

$filename = $_POST["filepath"];
$modifiedTs = filemtime($filename);
if ($modifiedTs != $_POST["timestamp"]) {
    $fileFromPath = file($filename);
    $lines = count($fileFromPath);
    $added = $_POST["prevlines"] ? $lines - $_POST["prevlines"] : 0;
    $requested = $_POST["linesrequested"] + $added;
    $content = tailLog($fileFromPath, $requested);
    $content = preg_replace('/[\x00-\x1F\x7F]/', '', $content);

    $response = '{ "timestamp": ' . $modifiedTs .
        ', "prevlines": ' . $lines .
        ', "linesrequested": ' . $requested .
        ', "content": "' . $content .
        '" }';
    echo $response;
} else
    echo "{}";
?>
