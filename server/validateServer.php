<?php

/**
 * Validate data posted
 * @return bool false in case of failure
 */
function validateData()
{
	$validationResult = array();
	$postedData = filter_input_array(INPUT_POST);
	$currentStep = $postedData["currentStep"];
	// dummy validation
	if($currentStep == "0"){
		if(array_key_exists("email", $postedData) && preg_match("/^.*\@gmail\.com$/",$postedData["email"]) == false){
			$validationResult["email"] = "Only gmail is supported";
		}
	}
	if($currentStep == "1"){
		if(array_key_exists("contactNumber", $postedData) && preg_match("/^0100[0-9]+$/",$postedData["contactNumber"]) == false){
			$validationResult["contactNumber"] = "Only vodafone eg is supported";
		}
	}
    return json_encode($validationResult, JSON_PRETTY_PRINT);
}