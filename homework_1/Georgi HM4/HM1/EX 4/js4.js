function calc() {
	let a = Number($("#numberA").val());
	let b = Number($("#numberB").val());
	if(isNaN(a)) {
		return;
	}
	if(isNaN(b)) {
		return;
	}
	let numArray = [a, b];
	numArray.sort((a, b) => a - b);
	window.alert(numArray);
}
