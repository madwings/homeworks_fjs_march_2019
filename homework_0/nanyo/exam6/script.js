function calc() {
	let a = Number($("#numberA").val());
	let b = Number($("#numberB").val());
	let c = Number($("#numberC").val());

	if(Number.isNaN(a)) {
		dangerAlert("A");
		return;
	}

	if(Number.isNaN(b)) {
		dangerAlert("B");
		return;
	}

	if(Number.isNaN(c)) {
		dangerAlert("C");
		return;
	}

	$("#alert").addClass("d-none");

	$("#numberA").val(b);
	$("#numberB").val(c);
	$("#numberC").val(a);
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