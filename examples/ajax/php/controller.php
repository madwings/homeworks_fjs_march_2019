<?php
use Vayant\GetApiData, Vayant\ProcessApiData, Vayant\Output;
const BASE = 1;
require_once 'getapidata.php';
require_once 'processapidata.php';
require_once 'output.php';

try {
	if (empty($_POST['origin'])) {
		$result = ['error' => 'Origin airport not supplied'];
	} else {
		//$apiData = GetApiData::getApiData();
		//$apiData = new ProcessApiData($apiData);
		//$destination = $apiData->getDestinations(trim($_POST['origin']));
        $destination = ['sofia', 'berlin', 'london', 'viena'];
		//$topThree = array_slice($apiData->getTop(), 0, 3);
        $topThree = ['sofia' => 10, 'berlin' => 6, 'london' => 4];
		$result = ['names' => $destination, 'topThree' => $topThree];
	}
	
	(new Output($result))->JSON();
} catch (\Exception $e) {
	header('Content-Type: application/json');
	echo '{"exception": "Caught exception: ' . $e->getMessage() . '"}';
}
