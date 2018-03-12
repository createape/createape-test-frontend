/*--------------------------------------------------------------
# NavBar
--------------------------------------------------------------*/
var navbar = (function() {
  $('.navbar-toggle').click(function() {
    $(this).toggleClass('is-active');
    
    if ($(this).children('.hamburger').length) {
      $(this).children('.hamburger').toggleClass('is-active');
    }
  });
})();