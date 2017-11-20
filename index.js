// functor : Store -> Function -> Action -> a
function functor(store) {
  return function(next) {
    return function(action) {
      if (typeof action.map === 'function') {
        action.map(store.dispatch)
        return
      }
      next(action)
    }
  }
}

module.exports = functor
