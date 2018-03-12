/*--------------------------------------------------------------
# Collapsible
--------------------------------------------------------------*/
var collapsible = (function() {
  $('.collapsible__toggle').on('click', function() {
    var collapseToggle = $(this);
    var target = collapseToggle.data('target');
    
    collapseToggle.parent().toggleClass('is-open');
    
    collapseToggle.parents('.collapsible').toggleClass('collapsed');
    
    if (collapseToggle.parent().hasClass('is-open')) {
      collapseToggle.attr('aria-expanded', 'true');
    }
    else {
      collapseToggle.attr('aria-expanded', 'false');
    }
    
    $(target).slideToggle();
  });
})();