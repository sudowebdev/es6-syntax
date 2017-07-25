const animal = {
	species: 'dog',
	weight: 34,
	sound: 'woof'
};

//destructuring the animal object into variables
let { species, sound } = animal;

/*
When converted to ES5 syntax with Babel, it looks like this:
	var species = animal.species;
	var sound = animal.sound;
*/

console.log("The " + species + " makes a " + sound + " sound!"); 