"use strict";

$(document).ready(function () {
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
  $('a[href*="#"]:not([href="#"])').click(function () {
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
  }); //active navbar follow id section

  $('a').on('click', function () {
    $('a').removeClass('activate');
    $(this).addClass('activate');
  }); //Header button active on page load
  // $('#Header').addClass('activate');

  $('.sidebar>li>a').on("click", function () {
    $('#overlay').fadeOut('slow');
    $('.sidebar').toggleClass("active");
    $('.sidebarBtn').toggleClass("toggle");
  });
  $(".sidebarBtn").click(function () {
    $('.sidebar').toggleClass("active");
    $('.sidebarBtn').toggleClass("toggle");
    $('#overlay').fadeToggle("slow", "swing");
  }); //remove "#overlay" id

  $('#overlay').click(function () {
    $('#overlay').fadeOut('slow');
    $('.sidebar').toggleClass("active");
    $('.sidebarBtn').toggleClass("toggle");
  });
  /**
   * Scroll To Top
   */

  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.scroll-button').fadeIn();
    } else {
      $('.scroll-button').fadeOut();
    }
  });
  $('.scroll-button').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 900);
    return false;
  }); // window.onscroll = function() {scrollFunction()};
  // function scrollFunction() {
  //     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
  //         $(".header-overlay").css("background-color", "rgb(130 129 127 / 61%)");
  //     } else {
  //         $(".header-overlay").css("background-color", "");
  //     }
  // }

  toggleReadMore();
  $(window).resize(function () {
    if ($(this).width() >= 1024) {
      $('.card-inner-wrapper').css('display', "block");
      $('.card-wrapper').removeClass("faq-row-container");
      $('.card-body').removeClass("faq-row-handle");
      $('.service-web').removeClass("faq-row");
    } else {
      $(".card-inner-wrapper").removeAttr("style");
    }
  });
  toggleService();
});

function toggleReadMore() {
  $("#toggle").click(function () {
    var elem = $("#toggle").text();

    if (elem == "Read More") {
      $("#toggle").text("Read Less");
      $("#more-text").slideDown();
    } else {
      $("#toggle").text("Read More");
      $("#more-text").slideUp();
    }
  });
}

function toggleService() {
  var faqTab = $('.faq-row-handle');
  var faqTabContainer = $('.faq-row-container');

  if (faqTab.length) {
    faqTab.on('click', function () {
      if ($(window).width() <= 1023) {
        var faqRow = $(this).parent();
        var faqContent = $(this).parent().find('.faq-row-content');
        faqTabContainer.find('.faq-row-content').not(faqContent).stop().slideUp('slow');
        faqTabContainer.find('.faq-row').not(faqRow).removeClass('open');
        faqContent.stop().slideToggle('slow', function () {
          faqRow.toggleClass('open', faqContent.is(':visible'));
        });
      }
    });
  }
}