$(document).ready(function() {
    /* $(".mobile-toggle-menu").click(function () {
      $(".mobile-nav").animate(
        {
          right: "80%",
        },
        500
      );
      $(".overlay").animate(
        {
          opacity: 1,
        },
        500
      );
      $(".overlay").css("visibility", "visible");
    });
    $(".close-mobile-nav").click(function () {
      $(".mobile-nav").animate(
        {
          right: "-100%",
        },
        500
      );

      $(".overlay").fadeTo("slow", 0);
    }); */

    //scroll to section id
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 900);
                return false;
            }
        }
    });

    //active navbar follow id section
    $('a').on('click', function() {
        $('a').removeClass('activate');
        $(this).addClass('activate');
    });
    //Header button active on page load
    // $('#Header').addClass('activate');

    $('.sidebar>li>a').on("click", () => {
        $('#overlay').fadeOut('slow');
        $('.sidebar').toggleClass("active");
        $('.sidebarBtn').toggleClass("toggle");
    });

    $(".sidebarBtn").click(() => {
        $('.sidebar').toggleClass("active");
        $('.sidebarBtn').toggleClass("toggle");
        $('#overlay').fadeToggle("slow", "swing");
    });

    //remove "#overlay" id
    $('#overlay').click(() => {
        $('#overlay').fadeOut('slow');
        $('.sidebar').toggleClass("active");
        $('.sidebarBtn').toggleClass("toggle");
    });
    /**
     * Scroll To Top
     */
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.scroll-button').fadeIn();
        } else {
            $('.scroll-button').fadeOut();
        }
    });

    $('.scroll-button').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 900);
        return false;
    });

    // window.onscroll = function() {scrollFunction()};

    // function scrollFunction() {
    //     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    //         $(".header-overlay").css("background-color", "rgb(130 129 127 / 61%)");
    //     } else {
    //         $(".header-overlay").css("background-color", "");
    //     }
    // }
});