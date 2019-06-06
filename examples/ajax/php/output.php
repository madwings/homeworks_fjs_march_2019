<?php
declare(strict_types = 1);
namespace Vayant;
defined('BASE') OR exit('No direct script access allowed');

class Output {
	private $output;
	
	public function __construct(array $output) {
		$this->output = $output;
	}
	
	public function JSON() {
		header('Content-Type: application/json');
		echo json_encode($this->output);
	}
}
