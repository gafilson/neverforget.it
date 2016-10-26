/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import {
  NfiRoutes
} from '../NfiReact.js'
import {
  Button
} from 'react-native-elements'

export class FactQuiz extends Component {

  constructor(props:Object) {
    super(props)
    this.state = {}
  }

  navigateToCreateFact() {
    this.props.navigator.jumpTo(NfiRoutes.routes.createFact)
  }

  render() {
    return (
        <View style={styles.container}>
          <Button
              title='Create a Fact'
              onPress={() => { this.navigateToCreateFact() }}
          />
          <Text style={styles.welcome}>
            Welcome to React Native, {this.state.name}!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.ios.js
          </Text>
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
          </Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  nameInput: {
    height: 36,
    padding: 4,
    margin: 24,
    fontSize: 18,
    borderWidth: 1,
  }
})
