<?php
header("Access-Control-Allow-Origin: *");
$file = 'D:\\post_output.txt';
file_put_contents($file, $_GET);





