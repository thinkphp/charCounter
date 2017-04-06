/*
 * charCounter.js
 * Copyright (c) 2017 Adrian Statescu
 * Licensed under the MIT, GPL licenses.
 */

(function($){

   $.fn.charCounter = function( o ) {

     o = $.extend({}, $.fn.charCounter.defaults, o)

     return this.each(function(i, el){
          
            var $el = $(el),

                $target = $(o.target)

                if(typeof o.count === 'string') o.count = parseInt($target.attr(o.count))

                //predefined count minus existing content
                $el.html(o.count - $target.text().length + o.description)

                $(o.target).keyup(function( e ){

                    var counter = this.value.length

                    if(counter <= (o.count - o.alertAt)) {

                       $el.removeClass('atWarn').removeClass('atAlert');
                    }

                    if(counter >= (o.count - o.warnAt)) {

                       $el.removeClass('atAlert').addClass('atWarn');   

                    } else {

                       $el.removeClass('atWarn');   
                    }

                    if(counter >= (o.count - o.alertAt)) {

                       $el.removeClass('atWarn').addClass('atAlert');   
                    }

                    $el.html(o.count - this.value.length + o.description)
             
                    if( o.stopAtLimit ) this.value = this.value.substring(0, o.count)
                  
                })
     })   
   }

   $.fn.charCounter.defaults = {
     count: 140,
     target: '#myTextarea',
     alertAt: 20,
     warnAt: 0,
     stopAtLimit: false,
     description: ''        
   } 

}(jQuery));