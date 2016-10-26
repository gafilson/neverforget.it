import { createStore } from 'redux'
import { di } from './NfiApp.js'

//function coreReducer(state = 0, action) {
//  switch (action.type) {
//    case 'INCREMENT':
//      return state + 1
//    case 'DECREMENT':
//      return state - 1
//    default:
//      return state
//  }
//}

di.register('AppStore', createStore(coreReducer))