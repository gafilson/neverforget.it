/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
    Animated,
    Navigator,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
} from 'react-native'
import {
    Scene,
    Router,
    TabBar,
    Modal,
    Schema,
    Actions,
    Reducer,
    ActionConst
} from 'react-native-router-flux'
import {
    Button,
    Icon,
    List,
    ListItem,
} from 'react-native-elements'
import {
    CreateFact,
    FactQuiz,
} from './core/'
import {
    SideMenu,
} from './utils/'
import {
    NfiDi
} from '../core/'

export class NfiReact extends Component {

  constructor(props) {
    super(props)
    this.state = {showMenu: false}
  }

  toggleMenu() {
    this.setState(Object.assign(this.state, { showMenu: !this.state.showMenu }))
    console.log('state now', this.state)
  }

  closeMenu() {
    this.setState(Object.assign(this.state, { showMenu: false }))
    console.log('state now', this.state)
  }

  render() {

    return (
        <SideMenu
            showMenu={this.state.showMenu}
            menuComponent={<View style={{flex: 1, backgroundColor: 'blue'}}><Text>My Cool Menu</Text></View>}
            >
          <View style={styles.container}>
            <TouchableWithoutFeedback onPress={ () => this.closeMenu() }>
              <View>
                <View style={styles.topMenu}>
                  <Text style={{color: 'white', fontSize: 18}}>NeverForget.it</Text>
                  <Icon name='menu' reverse onPress={ () => this.toggleMenu() }/>
                </View>
                <View style={{flex: 1, padding: 10}}>
                  <Text>Some Cool Text!</Text>
                </View>
               </View>
            </TouchableWithoutFeedback>
          </View>
        </SideMenu>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
  topMenu: {
    backgroundColor: 'black', // '#4286f4',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    paddingTop: 0,
    paddingBottom: 0,
    shadowColor: '#AAAAAA',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 1,
  }
})