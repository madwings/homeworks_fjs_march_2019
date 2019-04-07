function calc() {
	let hour = parseInt($("#hour").val());
	let money = parseFloat($("#money").val());
	let isHealthy = $("#healthy").prop("checked");

	if(isNaN(hour)) {
		dangerAlert("A");
		return;
	}

	if(isNaN(money)) {
		dangerAlert("B");
		return;
	}

	$("#alert").addClass("d-none");

	let resultWrapper = $("#result span");

	if(!isHealthy) {
		resultWrapper.text("I'm staying at home ");
		if(money > 0) {
			resultWrapper.append("and buying medication");
		} else {
			resultWrapper.append("and drink tea.");
		}
	} else {
		if(money < 10)
			resultWrapper.text("Drink coffee with frends.");
	}

	$("#result").removeClass("d-none");
}

function dangerAlert(field) {
	$("#result").addClass("d-none");
	let alert = $("#alert");

	if(alert.hasClass('d-none')) {
		alert.find("span").text(field);
		alert.removeClass("d-none");
	} else {
		alert.find("span").text(field);
	}
}