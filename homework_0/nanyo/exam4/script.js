function calc() {
	let a = Number($("#numberA").val());
	let b = Number($("#numberB").val());

	if(isNaN(a)) {
		dangerAlert("A");
		return;
	}

	if(isNaN(b)) {
		dangerAlert("B");
		return;
	}

	let numArray = [a, b];
	numArray.sort((a, b) => a - b);

	$("#alert").addClass("d-none");

	$("#result").removeClass("d-none");
	$("#result span").text(numArray.join(", "));
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