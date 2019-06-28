<?php
$json_data = json_encode($_POST, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
$bool_val = file_put_contents('./gm_config', $json_data);
echo $bool_val ? 'true' : 'false';
?>
