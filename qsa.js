/*!
 * JavaScript Library Boilerplate - v0.1 - 4/1/2011
 * http://benalman.com/
 * 
 * Copyright (c) 2011 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

// It's a good idea to start with a semicolon in case the previous library that
// was loaded does not finish with one. This ensures your self returning function
// will behave as intended.

;(function() {
  
  var name = 'QSA', // YOUR LIBRARY'S FULL NAME.
      global = this,
      old$ = global.$,
      oldN = global[name];
  
  // YOUR LIBRARY'S FUNCTION. BE CREATIVE, OR NOT, NOBODY CARES ANYWAYS.
  function fn( selector ) {
    // <ajpiano> "document.querySelectorAll() is super fast, but not to TYPE"
    return document.querySelectorAll.call(document, selector);
  };
  
  // Create a global reference to our library.
  global.$ = global[name] = fn;
  
  // Calling .noConflict will restore the global $ to its previous value.
  // Passing true will do that AND restore the full global name as well.
  // Returns a reference to your library's function.
  fn.noConflict = function( all ) {
    if ( all ) {
      global[name] = oldN;
    }
    global.$ = old$;
    return fn;
  };
  
// For cross-environment compatibility, check for the exports global in Node.js.
// In the case that it is available, your global can be exposed with require().
// To-Do: Support other server side frameworks?

}).call(this.exports || this);
