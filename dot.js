module.exports =
function dot(key) {
  return dotChain.call(function(obj) { return obj }, key)
}

function dotChain(key) {
  var self = this
    , f = function(obj) { return self(obj)[key] }
  f.dot = dotChain
  return f
}
