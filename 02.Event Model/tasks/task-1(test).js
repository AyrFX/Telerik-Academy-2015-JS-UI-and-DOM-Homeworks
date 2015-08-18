function solve(){
	return function (selector) {
		var givenElement;

		if (typeof selector == 'string') {
			givenElement = document.getElementById(selector);
		} else if (selector instanceof HTMLElement) {
			givenElement = selector;
		}


	};
};

solve('');