/* globals $ */

/*
Create a function that takes a selector and:
* Finds all elements with class `button` or `content` within the provided element
  * Change the content of all `.button` elements with "hide"
* When a `.button` is clicked:
  * Find the topmost `.content` element, that is before another `.button` and:
    * If the `.content` is visible:
      * Hide the `.content`
      * Change the content of the `.button` to "show"       
    * If the `.content` is hidden:
      * Show the `.content`
      * Change the content of the `.button` to "hide"
    * If there isn't a `.content` element **after the clicked `.button`** and **before other `.button`**, do nothing
* Throws if:
  * The provided ID is not a **jQuery object** or a `string` 

*/
function solve() {
  return function (selector) {
      if(typeof selector != 'string' || $(selector).length == 0) {
          throw new Error('The selector is not valid!');
      }

      var $selector = $(selector),
          $children = $selector.children('.button, .content');

      $children.text('hide');

      $selector.on('click', '.button', function () {
          var $this = $(this),
              $currentElement = $this.next();

          while(!$currentElement.hasClass('content') && !$currentElement.hasClass('button')) {
              $currentElement = $currentElement.next();
          }

          if (!$currentElement.hasClass('content')) {
              return;
          }

          if ($currentElement.css('display') == 'none') {
              $this.text('hide');
              $currentElement.css('display', '');
          } else {
              $this.text('show');
              $currentElement.css('display', 'none');
          }

      })
  };
};

module.exports = solve;