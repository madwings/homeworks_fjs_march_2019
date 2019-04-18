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
	$("#alert").addClass("d-none")
	$("#result").removeClass("d-none");
	$("#result span").empty().text(`Числото А= ${b}, а Числото В= ${a}`);
}