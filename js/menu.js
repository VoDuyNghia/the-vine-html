
$(document).ready(function () {
    $(window).scroll(function () {
        $('.sidebar_menu ul li').each(function () {
            var currLink = $(this),
                elementLink = $(currLink.find('a').attr('href'));
            if ($(window).scrollTop() > (elementLink.offset().top - 500) && elementLink.offset().top + elementLink.height() > $(window).scrollTop()) {
                $('.sidebar_menu ul li a').removeClass('active');
                currLink.find('a').addClass('active');
            }
        })
    });
});