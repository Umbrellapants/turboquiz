<?php
try {
	$link = new PDO('mysql:host=localhost;dbname=turboquiz;charset=utf8;', 'root', '');
	$link->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
	session_start();
	ob_start();
} catch(PDOException $ex) {
    echo FEJL_ON_SERVER_CONNECTION.$ex; //user friendly message
}
?>