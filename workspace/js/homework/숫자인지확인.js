function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
  }

isNaN(123)         // false
isNaN('123')       // false
isNaN('1e10000')   // false (This translates to Infinity, which is a number)
isNaN('foo')       // true
isNaN('10px')      // true
isNaN('')          // false
isNaN(' ')         // false
isNaN(false)       // false




