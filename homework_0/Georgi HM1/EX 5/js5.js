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
	window.alert(numArray);
}
