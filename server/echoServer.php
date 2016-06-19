<?php

/**
 * Process requests and return response
 * ,which is request posted data echo
 * @return bool false in case of failure
 */
function echoData()
{
    return json_encode(filter_input_array(INPUT_POST), JSON_PRETTY_PRINT);
}