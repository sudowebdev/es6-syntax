# New ES6 features


## var, let and const

#### Summary
**let** keyword is also called as the **new var** in JS. So, **instead of using var, we can use let** (except in some special cases).  

***Minimize mutable state***:  Always remember this principle. You should use **const** keyword whenever you find no need of re-assigning that variable.  
This simple thing helps a lot while debugging your application.


## Literals in ES6

ES6 has 2 kinds of literals:

1. **Template literals (code)**: Multi-line string literals that support interpolation
2. **Tagged template literals (code)**: Function calls

## Template literals

### Intro
Template literals are **string literals** that can stretch **across multiple** lines and include **interpolated expressions** (inserted via **${···}**):

	const firstName = 'Jane';
	console.log(`Hello ${firstName}!
	How are you
	today?`);

	// Output:
	// Hello Jane!
	// How are you
	// today?


The literal itself is delimited by **backticks (`) (key below Esc)**, the interpolated expressions inside the literal are delimited by ${ and }. Template literals **always produce strings**.

### Escaping in template literals

The **backslash** is used for **escaping inside template literals**.
It enables you to mention **backticks** and **${** inside template literals:


	> `\``
	'`'
	> `$` // OK
	'$'
	> `${`
	SyntaxError
	> `\${`
	'${'
	> `\${}`
	'${}'

### Line terminators in template literals

Line terminators in template literals are **always LF (\n)**.

	const str = `BEFORE
	AFTER`;
	console.log(str === 'BEFORE\nAFTER'); // true


## Tagged Template literals

**Tagged template literals (short: tagged templates) are function calls whose parameters are provided via template literals**.  
 

###### It is important to keep in mind that the names of template literals and tagged templates are slightly misleading. They have nothing to do with templates, as often used in web development: text files with blanks that can be filled in via (e.g.) JSON data.

The following is a **tagged template literal** (short: tagged template):

	tagFunction`Hello ${firstName} ${lastName}!`

*Putting a template literal after an expression triggers a function call, similar to how a parameter list (comma-separated values in parentheses) triggers a function call.*  

The previous code is **equivalent** to the following **function call** (in reality, first parameter is more than just an Array, but that is explained later).

	tagFunction(['Hello ', ' ', '!'], firstName, lastName)

Thus, the name before the content in backticks is the **name of a function** to call, the **tag function**. The tag function receives two different kinds of data: 

1. Template strings such as 'Hello '.
2. Substitutions such as firstName (delimited by ${}). A substitution can be any expression.

Template strings are known **statically (at compile time), substitutions are only known at runtime**. 

The **tag function** can do with its parameters as it pleases: It can completely ignore the template strings, return values of any type, etc.


## For more information

**[Read this](http://wesbos.com/tagged-template-literals/)**


## Destructuring

## What is it?
Destructuring is a **new** feature of JavaScript that **allows to break-apart / destructure stuff into variables**. 


## How to use it?
See the example in **destructuring/destructuring.js**  

## When to use it?
**Common use-case** of destructuring is to **make it easier to deal with options object**.  
*By options object I mean object that you pass in a function which is a single object  that might or might not contain several properties.*  

See the implementation in **destructuring/use-case.js**

## For more
***[Click here](https://youtu.be/PB_d3uBkQPs?list=PL0zVEGEvSaeHJppaRLrqjeTPnCH6vw-sm)***


## Rest-Parameters

The **rest parameter** syntax allows us to represent an **indefinite number of arguments as an array**.

**Syntax:**

	function f(a, b, ...theArgs) {
	  // ...
	}

**Description:**

If the **last named argument** of a function is prefixed with **...**, it becomes an *array whose elements from 0 (inclusive) to theArgs.length (exclusive) are supplied by the actual arguments passed to the function.*

**In the above example, theArgs would collect the third argument of the function (because the first one is mapped to a, and the second to b) and all the consecutive arguments.**

There is also an **argument object** that is/was used before to do the tasks **similar** to what rest-parameter does. But it was a **bit different**. The differences are covered below:

There are **three main differences** between **rest parameters and the arguments object**:

1. rest parameters are only the ones that haven't been given a separate name, while the arguments object contains all arguments passed to the function.
2. the arguments object is not a real array, while rest parameters are Array instances, meaning methods like sort, map, forEach or pop can be applied on it directly.
3. the arguments object has additional functionality specific to itself (like the callee property).


## For more

**[Refer here](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/rest_parameters)**


## Spread-Syntax 

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

## For more

**[Refer here](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator)**