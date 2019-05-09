function camelcase(s){
	let wordCount=1
	for(let a of s){
		if(a>='A' && a<='Z'){
			++wordCount;
		}
	}
	return wordCount;
}