/**
 * A simple validation class.
 */
(function (name, context, definition) {
    "use strict";
    if (typeof define === "function" && define.amd) {
        define(definition);
    }
    else if (typeof module !== "undefined" && module.exports) {
        module.exports = definition();
    }
    else if (context.exports) {
        context.exports = definition();
    }
    else {
        context[name] = definition();
    }
})("Validate", this, function() {
    "use strict";

    let Validate = function() {
        if (!(this instanceof Validate)) {
            return new Validate();
        }
    };
    Validate.prototype = {
		/**
		 * checkField function switches between different cases and
		 * fires a relevant function for each form element
		 */
		checkField: function(element) {
			let elName = $(element).attr('name');

			switch (elName) {
				case 'name': {
					return this.checkName(element);
				}
				case 'userName': {
					return this.checkUserName(element);
				}
				case 'email': {
					return this.checkEmail(element);
				}
				case 'password': {
					return this.checkPassword(element);
					break;
				}
				case 'password2': {
					return this.confirmPassword(element);
					break;
				}
			}
		},

		checkName: function(el) {
			let elVal = $(el).val();
			let isValid = /^\D+$/.test($(el).val());
			if (isValid == false || elVal == '' || elVal == ' ') {
				this.showErrorMessage(el);
			} else {
				this.hideErrorMessage(el);
			}
			return isValid;
		},

		// Check if field value matches the pattern and return true or false
		checkUserName: function(el) {
			let elVal = $(el).val();
			let isValid = /^\w+$/.test(elVal);
			if (isValid == false || elVal == '') {
				this.showErrorMessage(el);
			} else {
				this.hideErrorMessage(el);
			}
			return isValid;
		},

		// Check if field value matches the pattern and return true or false
		checkEmail: function(el) {
			let elVal = $(el).val();
			let isValid = /[^@]+@[^@]+/.test(elVal);
			if (isValid == false || elVal == '') {
				this.showErrorMessage(el);
			} else {
				this.hideErrorMessage(el);
			}
			return isValid;
		},

		// Check if field value matches the pattern and return true or false
		checkPassword: function(el) {
			let elVal = $(el).val();
			if (elVal.length < 8 || elVal == '') {
				this.showErrorMessage(el);
				return false;
			} else {
				this.hideErrorMessage(el);
				return true;
			}
		},

		// Accepts element and return it's value
		getElementVal: function(el) {
			return el.val();
		},

		// Check if field value matches the pattern and return true or false
		confirmPassword: function(el) {
			let elVal = $(el).val();
			if (elVal.length < 8 || elVal !== this.getElementVal($('#password'))) {
				this.showErrorMessage(el);
				return false;
			} else {
				this.hideErrorMessage(el);
				return true;
			}
		},

		// Show error message for the relevant element
		showErrorMessage: function(element) {
			$(element).next('.error-message').addClass('show');
		},

		// Remove error message for the relevant element
		hideErrorMessage: function(element) {
			$(element).next('.error-message').removeClass('show');
		},
    };
    Validate.VERSION = "1.0";
    return Validate;
});

