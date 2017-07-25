# Spread-Syntax 

## Intro
*Spread syntax allows an iterable such as an array expression to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected*.

**Syntax**

*For function calls*:

	myFunction(...iterableObj);

*For array literals*:

	[...iterableObj, 4, 5, 6];

*For object literals (new in ECMAScript; stage 3 draft)*:	

	let objClone = { ...obj };