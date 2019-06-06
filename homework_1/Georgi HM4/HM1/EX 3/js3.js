function calc() {
	let a = Number($("#numberA").val());
	let b = Number($("#numberB").val());
	if(isNaN(a)) {
		return;
	}
	if(isNaN(b)) {
		return;
	}
	$("#result span").empty().text(`Числото А= ${b}, а Числото В= ${a}`);
}