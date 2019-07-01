<?php
$output = array();
$msg = "";
if ($_POST["start"]) {
    echo "starting...\n";
    $oldCwd = getcwd();
    chdir("/home/pi");
    $msg = exec("sudo python green_monitoring.py -v", $output);
    chdir($oldCwd);
} elseif ($_POST["stop"]) {
    echo "stopping...\n";
    $msg = exec("sudo kill -INT $(pgrep -f 'green_monitoring.py')", $output);
}
echo print_r($msg);
echo "\n";
echo print_r($output);
?>
