/*
	var has function-level scope or so called functional scope
*/
for (var i = 0; i < 10; i++) {

	console.log(i);
}

console.log('after loop', i);


/*
	Error in the following code because of the functional scope of var
*/
function count() {
	for (var j = 0; j < 10; j++) {

		console.log(j);
	}
}

count();
console.log('after function', j);
