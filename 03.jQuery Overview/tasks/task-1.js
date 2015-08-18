/* globals $ */

/* 

Create a function that takes a selector and COUNT, then generates inside a UL with COUNT LIs:   
  * The UL must have a class `items-list`
  * Each of the LIs must:
    * have a class `list-item`
    * content "List item #INDEX"
      * The indices are zero-based
  * If the provided selector does not selects anything, do nothing
  * Throws if
    * COUNT is a `Number`, but is less than 1
    * COUNT is **missing**, or **not convertible** to `Number`
      * _Example:_
        * Valid COUNT values:
          * 1, 2, 3, '1', '4', '1123'
        * Invalid COUNT values:
          * '123px' 'John', {}, [] 
*/

function solve() {
  return function (selector, count) {
      var $selector = $(selector),
          $ul,
          $node,
          i;

      if (selector == null || typeof selector != 'string') {
          throw Error('Invalid selector!');
      }

      if(arguments.length < 2 || isNaN(count)) {
          throw Error('Counter parameter is missing or invalid!');
      }

      if (count < 1) {
          throw Error('Count must be greater than 1!');
      }

      $ul = $('<ul />')
          .addClass('items-list');

      for(i = 0; i < count; i += 1) {
          $node = $('<li />').addClass('list-item');
          $ul.append($node.text('List item #' + i));
      }

      $selector.append($ul);
  };
};

module.exports = solve;