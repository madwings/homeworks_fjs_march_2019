function intCalc() {
	let a = parseInt($("#intNumberA").val());
	let b = parseInt($("#intNumberB").val());

	if(Number.isNaN(a)) {
		dangerAlert("A");
		return;
	}

	if(Number.isNaN(b)) {
		dangerAlert("B");
		return;
	}

	let sum = a + b;
	let difference = a - b;
	let product = a * b;
	let residue = a % b;

	$("#intAlert").addClass("d-none");

	$("#intResult").removeClass("d-none");
	$("#intResult span").empty().text(`Sum(+): ${sum}, Difference(-): ${difference}, Product(*): ${product}, Residue(%): ${residue}`);
}

function floatCalc() {
	let a = parseFloat($("#floatNumberA").val());
	let b = parseFloat($("#floatNumberB").val());

	if(isNaN(a)) {
		dangerAlert("A");
		return;
	}

	if(isNaN(b)) {
		dangerAlert("B");
		return;
	}

	let sum = a + b;
	let difference = a - b;
	let product = a * b;
	let residue = a % b;

	$("#floatAlert").addClass("d-none");

	$("#floatResult").removeClass("d-none");
	$("#floatResult span").empty().text(`Sum(+): ${sum}, Difference(-): ${difference}, Product(*): ${product}, Residue(%): ${residue}`);
}

function dangerAlert(field) {
	$("#intResult").addClass("d-none");
	let alert = $("#alert");

	if(alert.hasClass('d-none')) {
		alert.find("span").text(field);
		alert.removeClass("d-none");
	} else {
		alert.find("span").text(field);
	}
}