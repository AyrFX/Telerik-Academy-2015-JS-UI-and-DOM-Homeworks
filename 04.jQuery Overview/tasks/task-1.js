function solve(){
  return function(selector){
    var $selector = $(selector),
    	$sel2 = $(selector),
    	$selectorElements = $selector.find('option'),
    	$menu,
    	$currentElement = $('<div />').addClass('current').attr('data-value', '').html('Select a value').css({
    		'display': ''
    	}),
    	$optionsContainer = $('<div />').addClass('options-container').css({
    		'position': 'absolute',
    		'display': 'none'
    	}),
    	i;

    if (!$selector.is('select')) {
    	throw new Error('The given element isn\'t select!');
    }

    $menu = $('<div />').addClass('dropdown-list');
    $selector.css({
    	'display': 'none'
    });

    for(i = 0; i < $selectorElements.length; i += 1) {
    	var $optionNode = $('<div />')
    		.addClass('dropdown-item')
    		.attr('data-value', $($selectorElements[i]).val())
    		.attr('data-index', i)
    		.text($selectorElements[i].text);
    	//var $optionNode = $('<div class=\"dropdown-item\" data-value=\"value-' + (i + 1) + '\" data-index=\"' + i + '\">' + $selectorElements[i].innerHTML + '</div>');
    	$optionsContainer.append($optionNode);
    }

    $currentElement.on('click', function() {
    	if ($optionsContainer.css('display') === 'none') {
            $optionsContainer.css('display','');
            $currentElement.text('Select a value');
        } else {
            $optionsContainer.css('display','none');
        }   
    });

    $optionsContainer.on('click', '.dropdown-item', function() {
    	$currentElement.attr('data-value', $(this).attr('data-value')); 
        $currentElement.text($(this).text());
        $optionsContainer.css('display','none');
        $selector.val($(this).attr('data-value'));
        $selector.attr('value', $selector.val());
    });

	$menu.append($selector);
    $menu.append($currentElement);
    $menu.append($optionsContainer);
    $('body').append($menu);
  };
}

module.exports = solve;