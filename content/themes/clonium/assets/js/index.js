/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        $(".post-content").fitVids();

        function casperFullImg() {
            $("img").each( function() {
                var contentWidth = $(".post-content").outerWidth(); // Width of the content
                var imageWidth = $(this)[0].naturalWidth; // Original image resolution

                if (imageWidth >= contentWidth) {
                    $(this).addClass('full-img');
                } else {
                    $(this).removeClass('full-img');
                }
            });
        };

        casperFullImg();
        $(window).smartresize(casperFullImg);

    });

}(jQuery));

$(document).on('scroll', headerPop);

function headerPop(e) {
  var top = $(document).scrollTop();
  if (top > 250) {
    $('.fixed-header').show();
  } else {
    $('.fixed-header').hide();
  }
};

$(document).on('click', '.top-link', scrollToTop);
$(document).on('click', '.about-link', scrollToAbout);
$(document).on('click', '.projects-link', scrollToProjects);
$(document).on('click', '.contact-link', scrollToContact);

function scrollToTop() {
  $('body').animate({
    scrollTop: 0
  }, 500);
};

function scrollToAbout() {
  $('body').animate({
    scrollTop: 251
  }, 500);
};

function scrollToProjects() {
  $('body').animate({
    scrollTop: $('#projects').offset().top - 70
  }, 500);
};

function scrollToContact() {
  $('body').animate({
    scrollTop: $('#contact').offset().top - 70
  }, 500);
};

(function($,sr){

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  }
  // smartresize 
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');