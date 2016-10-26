import { createStore } from 'redux'
import { di } from 'di4js'

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



di.autowired()
    .register('AppStore')
      .instance(createStore(coreReducer))
      .asSingleton()

//AppStateStore.subscribe(() =>
//        console.log(AppStateStore.getState())
//)