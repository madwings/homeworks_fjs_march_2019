const Validate = require('./src/validate.js');

$(document).ready(function() {
    const $form = $('#registerForm');
    const $formElements = $('.input-group input');
	const validate = Validate();
    $form.on('blur', 'input', function(event) {
        let target = event.target;
        validate.checkField(target);
    });

    $form.on('submit', function(event) {
        let errorCounter = 0;
        $formElements.map(function() {
            if (validate.checkField(this) == false) {
                errorCounter++;
            }
            if (errorCounter > 0) {
                event.preventDefault();
            }
        });
    });
});
