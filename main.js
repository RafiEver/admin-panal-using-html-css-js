(function($) {
    'use strict';

    $('.dontNavigate > a').on('click', function(event) {
        event.preventDefault();
        $(this).parent().find('ul').slideToggle();
        if($('aside').css('width')=== "75px"){
            $('aside').width('220px');
        }
        if ($('nav ul li span, .logo').css('display')=== "none") {
            $('nav ul li span, .logo').show()
        }
    });

    $('.top i').on('click', function(event) {
        $('nav ul li span, .logo').toggle();
        if($('aside').css('width')=== "220px"){
            $('aside').width('75px');
        }
       else{
        $('aside').width('220px');
       }
    });
    var windowWidth = $(window).width();
    var asideWidth = parseInt($('aside').css('width')); // Convert width to integer
    var bodySize = windowWidth - asideWidth;
    $('main').width(bodySize);
    $(window).resize(function() {
        var windowWidth = $(window).width();
        var asideWidth = parseInt($('aside').css('width')); // Convert width to integer
        var bodySize = windowWidth - asideWidth;
        $('main').width(bodySize);
        var windowWidth = $(window).width();
        var bodySize=windowWidth-$('aside').css('width')
        $('main').width(bodySize)
        if (windowWidth <= 700) {
            $('aside').removeAttr('style');
        }
    });
    

})(jQuery);
