/* globals $ */

/* 

Create a function that takes an id or DOM element and an array of contents

* if an id is provided, select the element
* Add divs to the element
  * Each div's content must be one of the items from the contents array
* The function must remove all previous content from the DOM element provided
* Throws if:
  * The provided first parameter is neither string or existing DOM element
  * The provided id does not select anything (there is no element that has such an id)
  * Any of the function params is missing
  * Any of the function params is not as described
  * Any of the contents is neight `string` or `number`
    * In that case, the content of the element **must not be** changed   
*/

module.exports = function () {

  return function (element, contents) {
	  var givenElement,
		  i,
		  len = contents.length,
		  currentElement;

	  if (arguments.length < 2) {
		  throw  Error('The function takes element (or element ID) and array of contents!')
	  }

	  if (typeof element !== 'string' && !(element instanceof  HTMLElement)) {
		  throw Error('Element ID must be given!');
	  }

	  if (!Array.isArray(contents)) {
		  throw Error('The contents must be given in an array!');
	  }

	  for(i = 0; i < len; i += 1) {
		  if (typeof contents[i] !== 'string' && typeof contents[i] !== 'number') {
			  throw Error('The array of contents must consist of strings and/or nmumbers!');
		  }
	  }

	  if (typeof element == 'string') {
		  givenElement = document.getElementById(element);
	  } else {
		  givenElement = element;
	  }

	  givenElement.innerHTML = '';
	  documentFragment = document.createDocumentFragment();

	  for(i = 0; i < len; i += 1) {
		  if (typeof contents[i] !== 'string' && typeof contents[i] !== 'number') {
			  continue;
		  }
		  currentElement = document.createElement('div');
		  currentElement.innerHTML = contents[i];
		  documentFragment.appendChild(currentElement);
	  }
	  givenElement.appendChild(documentFragment);
  };
};