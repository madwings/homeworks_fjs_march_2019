<?php
declare(strict_types = 1);
namespace Vayant;
defined('BASE') OR exit('No direct script access allowed');

class GetApiData {
	const APIURL = 'http://vayant.com/php-task/airports.json';
	
	public static function getApiData(string $output = 'array') {
		$data = file_get_contents(self::APIURL);
		print_r($data);
		return $output === 'array' ?  json_decode($data, true) : json_decode($data);
	}
}
