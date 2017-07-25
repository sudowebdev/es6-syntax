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




