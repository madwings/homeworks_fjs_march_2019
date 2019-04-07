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

	if(c >= a && c <= b) {
		$("#alert").addClass("d-none");

		$("#result").removeClass("d-none");
		$("#result span").empty().text(`The number ${c} is between ${a} and ${b}`);
	} else {
		$("#alert").addClass("d-none");

		$("#result").removeClass("d-none");
		$("#result span").empty().text(`The number ${c} is NOT between ${a} and ${b}`);
	}
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