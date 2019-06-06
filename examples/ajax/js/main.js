(function() {
	'use strict';

	class Helpers {
		static getQueryParam(param) {
			let result = location.search.substr(1)
				.split("&")
				.some(function(item) {
					item = item.split("=");
					return item[0] === param && (param = item[1]);
				});
				
			return result ? param : undefined;
		}
	}

	class AjaxProcessor {
		constructor(output) {
			this._output = output;
			this._baseURL = 'http://127.0.0.1/ajax_prag/';
		}

		sendRequest(origin) {
			let that = this;
			$.ajax({
				type: 'POST',
				dataType: 'json',
				url: this._baseURL+'php/controller.php/',
				data: {
					origin: origin
				},
				success: function(response) {
					that._output.clearError();
					if (response.error) {
						that._output.error(response.error);
					} else if (response.exception) {
						that._output.logError(response.exception);
					} else {
						that._output.showResults();
						that._output.names(response.names);
					}
				},
				error: function(jqXHR, textStatus, errorThrown) {
					that._output.logError(jqXHR, textStatus, errorThrown);
				}
			});
		}
	}

	class Output {	
		error(output) {
			$('#error').text(output);
		}
		
		logError() {
			console.log(arguments);
		}
		
		clearError() {
			$('#error').text('');
		}
		
		showResults() {
			$('#results').removeClass('hide');
		}
		
		hideResults() {
			$('#results').addClass('hide');
		}
		
		names(output) {
			let result = [];
			for (let item in output) {
				result.push(output[item]);
			}
			
			$('#names > span').text(result.join(', '));
		}
	}

	$(document).ready(function() {
		$('#originSubmit').on('click', function(e) {
			e.preventDefault();
			let $input = $('#originData');
			let inputText = $input.val();
			let output = new Output();
			if (inputText) {
				new AjaxProcessor(output).sendRequest(inputText);
			} else {
				output.hideResults();
				output.error('Name not supplied');
			}
		});
		
		let param = Helpers.getQueryParam('name');
		if (param) {
			new AjaxProcessor(new Output()).sendRequest(param);
		}
	});
})();
