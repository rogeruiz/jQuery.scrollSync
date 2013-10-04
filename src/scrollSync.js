/*
 * scrollSync
 * https://github.com/rogeruiz/jQuery.scrollSync
 *
 * Copyright (c) 2013 Roger Steve Ruiz
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.awesome = function() {
    var self = this;
    $(window).on('scroll', function(evt) {
      $(self).find('.mask__img').css({
        'top': '-' + scrollRatio() + 'px'
      });

    });

    var scrollPosition = function () {
      var scroll = window.scrollY;

      if (scroll < 0) {
        scroll = 0;
      } else if (scroll > ($('body').outerHeight(true) - $(window).height())) {
        scroll = ($('body').outerHeight(true) - $(window).height());
      }

      return scroll;
    };

    var scrollRatio = function () {
      var outerHeight = $(window).height();
      var innerHeight = $(self).find('.iphone__mask').outerHeight(true);
      var outerScroll = scrollPosition();

      var ratio = Math.round((outerScroll * innerHeight) / outerHeight);

      if (ratio > $(self).find('.mask__img').outerHeight(true)) {
        ratio = $(self).find('.mask__img').outerHeight() - $(self).find('.iphone__mask').height();
      }

      return ratio;

    };

    
    return this.each(function(i) {
      var $el = $(this);

      // $el.find('.mask__img').css({
      //   'top': scrollPosition()
      // });

    });
  };

}(jQuery));


$(function () {
  $('.js-sync-scroll').awesome();
});