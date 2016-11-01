import { createStore } from 'redux'
import { NfiDi } from './NfiDi.js'

function coreReducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

var NfiStateStore = createStore(coreReducer)

NfiStateStore.subscribe(() =>
  console.log('state store updated', NfiStateStore.getState())
)

NfiDi.register('AppState', NfiStateStore)

NfiStateStore.dispatch({type: 'INCREMENT'})
NfiStateStore.dispatch({type: 'INCREMENT'})
NfiStateStore.dispatch({type: 'INCREMENT'})
NfiStateStore.dispatch({type: 'DECREMENT'})
NfiStateStore.dispatch({type: 'INCREMENT'})