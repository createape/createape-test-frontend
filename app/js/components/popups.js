/*--------------------------------------------------------------
# Popups
--------------------------------------------------------------*/
var popups = (function() {
  $('.add-service--toggle').magnificPopup({
    items: {
      src: '#service-search',
      type: 'inline'
    },
    mainClass: 'popup-wrap'
  });
})();