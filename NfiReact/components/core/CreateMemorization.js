import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native'
import {
    MainMenu,
    NfiRoutes,
} from '../NfiReact.js'
import {
    Button,
    Card,
    FormLabel,
    FormInput,
    Icon,
    SideMenu,
} from 'react-native-elements'

export class CreateMemorization extends Component {

  constructor(props:Object) {
    super(props)
    this.state = {showMenu: false}
    this.fact = new Fact()
  }

  render() {

    return (
        <View style={{height: 100, width: 100, borderWidth: 1, borderColor: 'black'}}>
          <Image
              style={{resizeMode: 'contain'}}
              source={require('../../assets/placeholder.png')}
          />
        </View>
    )
  }
}
