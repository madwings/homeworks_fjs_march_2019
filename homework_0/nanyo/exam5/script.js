function calc() {
	let a = Number($("#numberA").val());
	let b = Number($("#numberB").val());
	let c = Number($("#numberC").val());

	if(isNaN(a)) {
		dangerAlert("A");
		return;
	}

	if(isNaN(b)) {
		dangerAlert("B");
		return;
	}

	if(isNaN(c)) {
		dangerAlert("C");
		return;
	}

	let numArray = [a, b, c];
	numArray.sort((a, b) => b - a);

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