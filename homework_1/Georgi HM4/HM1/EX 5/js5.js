function calc() {
	let a = Number($("#numberA").val());
	let b = Number($("#numberB").val());
	let c = Number($("#numberC").val());
	if(isNaN(a)) {
		return;
	}
	if(isNaN(b)) {
		return;
	}
	if(isNaN(c)) {
		return;
	}
	let numArray = [a, b, c];
	numArray.sort((a, b) => b - a);
	window.alert(numArray);
}
