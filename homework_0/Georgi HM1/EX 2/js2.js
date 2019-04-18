function intCalc() {
	let a = parseInt($("#intNumberA").val());
	let b = parseInt($("#intNumberB").val());
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
	$("#intAlert").addClass("d-none");
	$("#intResult").removeClass("d-none");
	$("#intResult span").empty().text(`Sum(+): ${sum}, Difference(-): ${difference}, Product(*): ${product}, Residue(%): ${residue}`);
	
	let numArray=[sum, difference, product, residue];
	alert("Първото число е събиране второто изваждане третото пройзведение а четвъртото е остатък.");
    window.alert(numArray);
}
