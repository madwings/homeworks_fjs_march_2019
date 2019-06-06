function intCalc() {
	let a = Number($("#intNumberA").val());
	let b = Number($("#intNumberB").val());
	if(isNaN(a)) {
		return;
	}
	if(isNaN(b)) {
		return;
	}
	let sum = a + b;
	let difference = a - b;
	let product = a * b;
	let residue = a % b;
	$("#intResult span").empty().text(`Sum(+): ${sum}, Difference(-): ${difference}, Product(*): ${product}, Residue(%): ${residue}`);
	
	let numArray=[sum, difference, product, residue];
	alert("Първото число е събиране второто изваждане третото пройзведение а четвъртото е остатък.");
    window.alert(numArray);
}
