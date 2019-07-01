<?php
$output = array(
);
$msg = "";
if ($_POST["start"]) {
    echo "starting...\n";
    $msg = exec("sudo python /home/pi/green_monitoring.py", $output);
} elseif ($_POST["stop"]) {
    echo "stopping...\n";
    $msg = exec("sudo kill -INT $(pgrep -f 'green_monitoring.py$')", $output);
//    echo posix_kill ( , int $sig )
}
sleep(2);
echo print_r($msg);
echo "\n";
echo print_r($output);
?>
