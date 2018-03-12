(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
var navbar = require('./components/navbar.js');
var collapsible = require('./components/collapsible.js');
var panels = require('./components/panels.js');
var popups = require('./components/popups.js');
var triggers = require('./components/triggers.js');
},{"./components/collapsible.js":2,"./components/navbar.js":3,"./components/panels.js":4,"./components/popups.js":5,"./components/triggers.js":6}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
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
},{}],6:[function(require,module,exports){
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
},{}]},{},[1])

//# sourceMappingURL=app.js.map
