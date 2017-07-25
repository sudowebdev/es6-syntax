makeSound({
	
	weight: 34,
	sound: 'woof'
});


/* 
	We have to implement that function with a restriction to 
	make the species property optional 
*/ 

function makeSound(options){
	options.species = options.species || 'animal';
	console.log("The " + options.species + " makes a " + options.sound + " sound!");

	//With species: The dog makes a woof sound!
	//Without species: The animal makes a woof sound!
}