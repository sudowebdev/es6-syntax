/*
	let has block-level scope
*/

for (let j = 0; j < 10; j++) {

	console.log('let: ',j);
}

// j comes to be not defined because of the block-level scope of let
console.log('after loop', j);