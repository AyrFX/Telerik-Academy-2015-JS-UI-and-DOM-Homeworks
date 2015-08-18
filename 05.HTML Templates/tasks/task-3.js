function solve(){
    return function(){
        $.fn.listview = function(data){
            var $this = $(this),
                templateId = $this.attr('data-template'),
                template = $("#" + templateId).html(),
                compiled = handlebars.compile(template),
                i,
                len;

            for (i = 0, len = data.length; i < len; i++) {
                $this.append(compiled(data[i]));
            }

            return this;
    };
  };
}

module.exports = solve;