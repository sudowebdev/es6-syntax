/*
	const keyword prevents the variable from being reassigned another value
*/

const a = 3;
//a = 4;



const anotherObject = {name: "newObject"};
//anotherObject = {name: "anotherNewObject"};
console.log(anotherObject);


/*
	But it lets you to modify the object properties
*/
const person = {name: "sudowebdev"};
person.name = "thesudocode";
console.log(person);