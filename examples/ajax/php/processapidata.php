<?php
declare(strict_types = 1);
namespace Vayant; 
defined('BASE') OR exit('No direct script access allowed');

class ProcessApiData {
	private $data;
	
	public function __construct(array $data) {
		$this->data = $data;
	}
	
	private static function sortAirports($a, $b) {
		return $b - $a;
	}
		
	public function getDestinations(string $origin): array {
		$result = [];
		foreach ($this->data as $item) {
			if (isset($item['org']) && $item['org'] === $origin && 
				isset($item['dest']) && ! isset($result[$item['dest']])) {
				$result[$item['dest']] = $item['dest'];
			}
		}
		
		return $result;
	}
		
	public function getTop(): array {
		$result = [];
		foreach ($this->data as $item) {
			if (isset($item['dest']) && ! isset($result[$item['dest']])) {
				$result[$item['dest']] = 1;
			} else {
				++$result[$item['dest']];
			}
			
			if (isset($item['org']) && ! isset($result[$item['org']])) {
				$result[$item['org']] = 1;
			} else {
				++$result[$item['org']];
			}
		}
		
		uasort($result, 'self::sortAirports');
		
		return $result;
	}
}
