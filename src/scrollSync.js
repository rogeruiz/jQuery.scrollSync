/*
 * scrollSync
 * https://github.com/rogeruiz/jQuery.scrollSync
 *
 * Copyright (c) 2013 Roger Steve Ruiz
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.scrollSync = function() {
    var self = this;
    $(window).on('scroll', function(evt) {
      $(self).trigger('sync');
    });

    return this.each(function(i) {
      var $el = $(this);

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
        var imgHeight = $el.find('.mask__img').outerHeight();
        var outerHeight = $(window).outerHeight(true);
        var innerHeight = $el.find('.ss-container__mask').outerHeight(true);
        var outerScroll = scrollPosition();
        var scrollLimit = imgHeight - $el.find('.ss-container__mask').outerHeight();
        var speed = 0.75;
        var ratio = Math.round((outerScroll * innerHeight) / outerHeight) * speed;

        if (ratio > scrollLimit) {
          ratio = scrollLimit;
        }

        return ratio;

      };

      $el.on('sync', function (evt) {
        $(this).find('.mask__img').css({
          'top': '-' + scrollRatio() + 'px'
        });
      });

    });
  };

}(jQuery));


$(function () {
  $('.js-sync-scroll').scrollSync();
});