function calc() {
	let x = Number($("#numberX").val());
	let y = Number($("#numberY").val());
	let z = Number($("#numberZ").val());
	if(isNaN(x)) {
		return;
	}
	if(isNaN(y)) {
		return;
	}
	if(isNaN(z)) {
		return;
	}
	if(z > x && z < y) {
		$("#alert").addClass("d-none");
		$("#result").removeClass("d-none");
		$("#result span").empty().text(`Числото Z е между X и Y`);
	} else {
		$("#alert").addClass("d-none");
		$("#result").removeClass("d-none");
		$("#result span").empty().text(`Числото Z не е между X и Y`);
	}
}