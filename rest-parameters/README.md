# Rest-Parameters

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

