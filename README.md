# redux-functor
[![redux-functor](https://img.shields.io/npm/v/redux-functor.svg)](https://www.npmjs.com/package/redux-functor)
[![Build Status](https://travis-ci.org/articulate/redux-functor.svg?branch=master)](https://travis-ci.org/articulate/redux-functor)
[![Coverage Status](https://coveralls.io/repos/github/articulate/redux-functor/badge.svg?branch=master)](https://coveralls.io/github/articulate/redux-functor?branch=master)
[![NSP Status](https://nodesecurity.io/orgs/articulate/projects/b15b909f-2db6-48c0-8068-906e020edbce/badge)](https://nodesecurity.io/orgs/articulate/projects/b15b909f-2db6-48c0-8068-906e020edbce)

Functor middleware for redux.

### Usage

```haskell
functor : Store -> Function -> Action -> a
```

Redux middleware to dispatch actions that are functors.  This includes the built-in javascript [`Array`](http://devdocs.io/javascript/global_objects/array) type, along with many other [ADT's](https://github.com/evilsoft/crocks#crocks).

If any action has a property called `map` that is a function, the action is assumed to be a functor.

```js
const { applyMiddleware, combineReducers, createStore } = require('redux')
const functor = require('redux-functor')

const reducers = require('../ducks')

const store = createStore(combineReducers(reducers), applyMiddleware(functor))
```

