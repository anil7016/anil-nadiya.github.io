<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

//print_r($_POST);

if (empty($_POST['name']) && empty($_POST['email'])) die();

if ($_POST)
	{
	// set response code - 200 OK

	http_response_code(200);
	$subject = $_POST['name'];
	$to = "anil.kanhasoft@gmail.com";
	$from = $_POST['email'];
	
	// data

	$headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
	$headers.= "From: <" . $from . ">";
	//mail($to, $subject, $msg, $headers);

	echo json_encode( ["status" => 200, "message" => "Sent successfully"] );
	// echo json_encode(array(
	// 	"sent" => true
	// ));
	}
  else
	{
	// tell the user about error
	echo json_encode(["status" => 401, "message" => "Something went wrong"]);
	}

?>