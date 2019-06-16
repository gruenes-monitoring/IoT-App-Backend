<?php
	echo `whoami`;
	echo '\nwriting file\n';
	echo 'success: ';
	
	
	$json_data = json_encode($_POST, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE );
	$bool_val = file_put_contents('./gm_config', $json_data);
	echo $bool_val ? 'true' : 'false';
    
	echo '\nHello. This is your results page!\n\n';
	foreach ($_POST as $key => $value) {
		echo "{$key} => {$value}\n";
	}


?>
