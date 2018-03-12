/*--------------------------------------------------------------
# Triggers
--------------------------------------------------------------*/

/***= Checkbox triggers table row =***/
var triggers = (function() {
  $('.table-row-select').on('change', function() {
    var tableRowTrigger = $(this);
    
    if (tableRowTrigger.is(':checked')) {
      tableRowTrigger.parents('.table__row').addClass('is-selected');
    }
    else {
      tableRowTrigger.parents('.table__row').removeClass('is-selected');
    }
  });
})();