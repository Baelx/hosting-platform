import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class AnimateOnScroll {
  constructor(els, offset, effect) {
    this.itemsToAnimate = els;
    this.offsetPercent = offset;
    switch (effect) {
      case 'fadeInShrink':
      this.hideInitiallyFade();
      this.createWaypointsFade();
      break;
      case 'slideInRight':
      this.hideInitiallySlide();
      this.createWaypointsSlide();
      break;
    }

  }

  hideInitiallyFade() {
    this.itemsToAnimate.addClass("fade-in-item");
  }

  hideInitiallySlide() {
    this.itemsToAnimate.addClass("slide-in-item-right");
  }

  createWaypointsFade() {
    var that = this;
    this.itemsToAnimate.each(function() {
      var currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function() {
          $(currentItem).addClass("fade-in-item--is-visible");
        },
        offset: that.offsetPercent
      });
    });
  }

  createWaypointsSlide() {
    var that = this;
    this.itemsToAnimate.each(function() {
      var currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function() {
          $(currentItem).addClass("slide-in-item-right--is-visible");
        },
        offset: that.offsetPercent
      });
    });
  }
}



export default AnimateOnScroll;
