makeSound({
	species: 'dog',
	weight: 34,
	sound: 'woof'
});


/* 
	We have to implement that function with a restriction to 
	make the species property optional 
*/ 

//Normal implementation
/*
function makeSound(options){
	
	//options.species = options.species || 'animal';
	//console.log("The " + options.species + " makes a " + options.sound + " sound!");


	//to make it more viable
	let species = options.species || 'animal';
	let sound = options.sound;
	console.log("The " + species + " makes a " + sound + " sound!");

	//With species: The dog makes a woof sound!
	//Without species: The animal makes a woof sound!
}
*/

//Using destructuring
/*
function makeSound(options){
	let { species, sound } = options;
	species = species || 'animal';
	console.log("The " + species + " makes a " + sound + " sound!");

	//With species: The dog makes a woof sound!
	//Without species: The animal makes a woof sound!
}
*/

//Make it more optimal with destructuring and default values
function makeSound({ species = 'animal', sound }){
	
	console.log("The " + species + " makes a " + sound + " sound!");

	//With species: The dog makes a woof sound!
	//Without species: The animal makes a woof sound!
}
