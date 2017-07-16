/*
	let has block-level scope
*/

for (let j = 0; j < 10; j++) {

	console.log('let: ',j);
}

// j comes to be not defined because of the block-level scope of let
//console.log('after loop', j);


/*
	Using var in the same context doesn't give any error
*/
for (var i = 0; i < 10; i++) {

	console.log(i);
}


console.log('after loop', i);