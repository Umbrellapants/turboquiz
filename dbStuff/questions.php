<?php
include ("./db_connect.php");
require ("./texts.php"); 

$quizId = $_GET['quizId'];
$branch = $_GET['branch'];

$stmt = $link->prepare("SELECT * from quiz 
						INNER JOIN qq 
						ON quizFK = quizId
						INNER JOIN quest
						ON qGroup = questFK
						where quizId = $quizId
						AND branch = $branch");
$stmt->execute();	

$initial_teamData = array();
 
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {

	$obj = array(
		'questId' => $row['questId'],
		'questText' => $row['quest'],
		'questImg' => $row['qImg'],
		'quests' => [
			'a1' => $row['a1'], 
			'a2' => $row['a2'],
			'a3' => $row['a3'],
			'a4' => $row['a4']
		],
		'answer' => $row['a']
	);
	array_push($initial_teamData, $obj);	
}

echo json_encode($initial_teamData);

include ("./db_luk.php");
?>



