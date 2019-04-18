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
	window.alert(numArray);
}
