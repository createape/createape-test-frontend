/*--------------------------------------------------------------
# Panels
--------------------------------------------------------------*/
var panels = (function() {
  $('.panel__toggle').on('click', function(event) {
    event.preventDefault();
    
    var panelToggle = $(this);
    var target = panelToggle.data('target');
    
    panelToggle.toggleClass('is-open');
    $(target).toggleClass('is-open');
    
    if (panelToggle.hasClass('is-open')) {
      panelToggle.attr('aria-expanded', 'true');
    }
    else {
      panelToggle.attr('aria-expanded', 'false');
    }
  });
})();