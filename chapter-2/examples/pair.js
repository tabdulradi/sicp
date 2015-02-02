function pair(h, t) {
  function f(selector) {
    return selector(h, t)
  }
  f.toString = function(){return "[" + h + "," + t +"]"} // Trick for better debugging!
  return f
}

function head(p) {
  return p(function(h, t) {
    return h
  });
}

function tail(p) {
  return p(function(h, t) {
    return t
  });
}
