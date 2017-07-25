# Spread-Syntax 

## Intro
*Spread syntax allows an iterable such as an array expression to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected*.

## Syntax

### For function calls:

	myFunction(...iterableObj);

### For array literals:

	[...iterableObj, 4, 5, 6];

### For object literals (new in ECMAScript; stage 3 draft):	

	let objClone = { ...obj };


## Examples

### For function calls

It is common to use **Function.prototype.apply** in cases where you want to use the elements of an array as arguments to a function.

	function myFunction(x, y, z) { }
	var args = [0, 1, 2];
	myFunction.apply(null, args); 
	/*
	remember a for Array and c for Comma
	apply takes in arguments in Array form
	call takes in arguments in Comma separated form

With spread syntax the above can be written as:

	function myFunction(x, y, z) { }
	var args = [0, 1, 2];
	myFunction(...args);


### For Array literals

#### A more powerful array literal
**Without spread syntax**, to **create** a new array **using an existing array as one part of it**, the array literal syntax is no longer sufficient and imperative code must be used instead using **a combination of push, splice, concat, etc**. With spread syntax this becomes much more succinct:  

	var parts = ['shoulders', 'knees']; 
	var lyrics = ['head', ...parts, 'and', 'toes']; 
	// ["head", "shoulders", "knees", "and", "toes"]


#### Copy an array
	var arr = [1, 2, 3];
	var arr2 = [...arr]; // like arr.slice()
	arr2.push(4); 

	// arr2 becomes [1, 2, 3, 4]
	// arr remains unaffected

###### Note: Spread syntax effectively goes one level deep while copying an array. Therefore, it may be unsuitable for copying multidimensional arrays.


### For object literals

**Shallow-cloning (excluding prototype) or merging of objects** is now possible using a shorter syntax than **Object.assign()**.

	var obj1 = { foo: 'bar', x: 42 };
	var obj2 = { foo: 'baz', y: 13 };

	var clonedObj = { ...obj1 };
	// Object { foo: "bar", x: 42 }

	var mergedObj = { ...obj1, ...obj2 };
	// Object { foo: "baz", x: 42, y: 13 }

