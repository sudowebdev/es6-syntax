# Literals in ES6

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