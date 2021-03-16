/**
 * @file
 * Placeholder file for custom sub-theme behaviors.
 *
 */
(function ($, Drupal) {

  /**
   * Use this behavior as a template for custom Javascript.
   */
  Drupal.behaviors.exampleBehavior = {
    attach: function (context, settings) {
      //alert("I'm alive!");
      $(document).ready(function(){
        $(".main-slider").owlCarousel({
          loop: true,
          margin: 0,
          dots: true,
          items: 1,
          autoplay: true,
          autoHeight:true,
          autoplayTimeout: 8000,
          responsive:{
            0:{
              nav:false
            },
            600:{
              nav:false
            }
          }
        });
      });
    }
  };

})(jQuery, Drupal);
