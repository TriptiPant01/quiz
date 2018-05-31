import { createStore, applyMiddleware, compose } from 'redux'
// import { autoRehydrate } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'

import {
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default (rootReducer, rootSaga) => {
  const middleware = []
  const enhancers = []

  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)

  const middlewareNavigation = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav,
  )
  middleware.push(middlewareNavigation)

  enhancers.push(applyMiddleware(...middleware))

  const store = createStore(rootReducer, composeEnhancers(...enhancers))

  sagaMiddleware.run(rootSaga)

  return store
}
