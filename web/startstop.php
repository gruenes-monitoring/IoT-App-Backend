<?php
$output = array();
$msg = "";
if ($_POST["start"]) {
    $msg = exec("pgrep -afl 'python green_monitoring' | grep -v pgrep", $pids);
    if (count($pids) > 0) {
        echo "Running already!\n";
    } else {
        $oldCwd = getcwd();
        chdir("/home/pi");
        $msg = exec("sudo python green_monitoring.py -v > /dev/null 2>&1  &", $output);
        chdir($oldCwd);
    }
} elseif ($_POST["stop"]) {
    $msg = exec("sudo kill -INT $(pgrep -f 'green_monitoring.py')", $output);
}
echo print_r($msg);
echo "\n";
echo print_r($output);
?>
