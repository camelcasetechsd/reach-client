<?php

/**
* process requests and return response
* @return bool false in case of failure
*/
function routeRequest()
{
    $type = filter_input(INPUT_GET, 'type');
    if (! empty($type)) {
        $typeServer = __DIR__ . "/../server/" . $type . "Server.php";
        if(! file_exists($typeServer)){
          return false;
        }
        require_once $typeServer;
        $requestMethod = $type . "Data";
        if(! function_exists($requestMethod)){
          return false;
        }
        $requestResult = $requestMethod();
        header('Content-Type: application/json');
        header('Cache-Control: no-cache');
        header('Access-Control-Allow-Origin: *');
        echo $requestResult;
    } else {
        return false;
    }
}

return routeRequest();
