<?php
include ("./db_connect.php");
require ("./texts.php"); 

$quizId = $_GET['quizId'];

$stmt = $link->prepare("SELECT * from quiz 
						INNER JOIN qq 
						ON quizFK = quizId
						INNER JOIN quest
						ON qGroup = questFK
						where quizId = $quizId
						GROUP BY branch");
$stmt->execute();	

$branchData = [];

$i = 1;
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
	array_push($branchData, $i);
	$i++;
}
echo json_encode($branchData);

include ("./db_luk.php");
?>



