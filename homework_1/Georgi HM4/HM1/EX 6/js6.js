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
	$("#numberA").val(b);
	$("#numberB").val(c);
	$("#numberC").val(a);
}