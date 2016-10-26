import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import {
    MainMenu,
    NfiRoutes,
} from '../NfiReact.js'
import {
    Button,
    FormLabel,
    FormInput,
    SideMenu,
} from 'react-native-elements'

class Fact {

  prompt:string
  fact:string

  save():void {
    console.log('would save fact', this)
  }
}

export class CreateFact extends Component {

  constructor(props:Object) {
    super(props)
    this.state = {showMenu: false}
    this.fact = new Fact()
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

    return (
        <View>

          <FormLabel>Prompt</FormLabel>
          <FormInput onChangeText={ (text) => this.updatePrompt(text) }/>

          <FormLabel>Fact</FormLabel>
          <FormInput onChangeText={ (text) => this.updateFact(text) }/>

          <Button
              title='Create Memory'
              onPress={ () => this.saveFact() }>Never Forget</Button>
        </View>
    )
  }
}
