/* globals $ */

/* 

Create a function that takes an id or DOM element and:
  

*/

function solve(){
    return function (selector) {
        var givenElement,
            buttonElements,
            contentElements,
            i,
            len;

        if (typeof selector == 'string') {
            givenElement = document.getElementById(selector);
            if (givenElement == null) {
                throw Error('There is no element with this ID in the html page!')
            }
        } else if (selector instanceof HTMLElement) {
            givenElement = document.getElementById(selector.id);
            if (givenElement == null) {
                throw Error('There is no element with this ID in the html page!')
            }
        } else {
            throw Error('The given ID or DOM element is not valid for the HTML page!');
        }

        buttonElements = document.querySelectorAll('.button');
        /*if (buttonElements.length == 0) {
            return;
        }*/

        for(i = 0, len = buttonElements.length; i < len; i += 1) {
            buttonElements[i].innerHTML = 'hide';
        }

        givenElement.addEventListener('click', buttonClick, false);

        function buttonClick(ev) {
            if (ev.target.className == 'button') {
                var nextContentElement = ev.target;
                while(nextContentElement.className != 'content') {

                    nextContentElement = nextContentElement.nextElementSibling;

                    if (nextContentElement.className == 'content') {
                        if (nextContentElement.style.display === '') {
                            nextContentElement.style.display = 'none';
                            ev.target.innerHTML = 'show';
                        } else if (nextContentElement.style.display === 'none') {
                            nextContentElement.style.display = '';
                            ev.target.innerHTML = 'hide';
                        }
                    }

                    if (nextContentElement.className == 'button') {
                        break;
                    }
                }
            }
        }
    }
};

module.exports = solve;