import React, { Component } from 'react';
import {
    Navigator,
    StyleSheet,
    Text,
    View
} from 'react-native'
import {
    Button,
    FormLabel,
    FormInput,
    SideMenu,
} from 'react-native-elements'
import {
    MainMenu,
    NfiRoutes,
    NfiApp,
} from '../../core/'
import {
    Memorization,
    Memory,
    Mnemonic,
} from '../../core'

export class CreateMemorizationFlow extends Component {

  constructor(props:Object) {
    super(props)
    this.state = {memorization: new Memorization()}
  }

  saveFact() {
    this.fact.save()
    this.setState(Object.assign(this.state, {showMenu: !this.state.showMenu }))
    console.log('fact saved')
  }

  updatePrompt(prompt) {
    this.fact.prompt = prompt
    console.log('fact prompt updated', this.fact.prompt)
  }

  updateFact(fact) {
    this.fact.fact = fact
    console.log('fact updated', this.fact.fact)
  }

  render() {

    var createMemorizationRoutes:NfiRoutes = NfiApp.di.get('CreateMemorizationRoutes')

    foo = new NfiRoutes()
    console.log('new foo route')

    return (
        <Navigator
              initialRouteStack={ createMemorizationRoutes.routeStack }
              renderScene={ NfiRoutes.DEFAULT_RENDER_SCENE }
        />
    )
  }
}
