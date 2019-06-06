
 function StairCase(count) {
    for (let n = 1; n <= count; n++) {
		document.write(('&nbsp;&nbsp;').repeat(count-n).concat(('#').repeat(n)).concat('<br />'));
    } 
}
            
StairCase(5)