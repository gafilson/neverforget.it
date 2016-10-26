/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
    Navigator,
    StyleSheet,
    TouchableWithoutFeedback,
    View,
} from 'react-native'
import {
    Button,
    SideMenu,
    Icon,
    List,
    ListItem,
} from 'react-native-elements'
import {
    CreateFact,
} from './core/CreateFact.js'
import {
    FactQuiz,
} from './core/FactQuiz.js'


class NfiRoute {
  constructor(nameString:string, renderSceneFunction:Function) {
    this.name = nameString
    this.renderScene = renderSceneFunction
  }
}

export class NfiRoutes {
  static routes:Object<string, NfiRoute> = {
    createFact: new NfiRoute('createFact',  (route, navigator) => <CreateFact navigator={navigator}></CreateFact>),
    factQuiz:   new NfiRoute('factQuiz',    (route, navigator) => <FactQuiz navigator={navigator}></FactQuiz>)
  }

  static addRoute(route:NfiRoute) {

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
  topMenu: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 5,
    height: 30,
  }
})

export class NfiReact extends Component {

  constructor(props) {
    super(props)
    this.state = {}
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

    const MainMenu = (
        <List containerStyle={{marginTop: 20}}>
          <ListItem
              title='My Memories'
              leftIcon={{name: 'launch'}}
              underlayColor='blue'
          />
          <ListItem
              title='Close Menu'
              leftIcon={{name: 'close'}}
              onPress={ () => this.closeMenu() }
              hideChevron={true}
          />
        </List>
    )

    return (
        <SideMenu
            MenuComponent={MainMenu}
            toggled={this.state.showMenu}
            >
          <View style={styles.container}>
            <View style={styles.topMenu}>
              <Icon name='menu' onPress={ () => this.toggleMenu() }/>

            </View>
            <TouchableWithoutFeedback onPress={ () => this.closeMenu() }>
              <View style={{flex: 1}}>
                <Navigator
                  initialRoute={ NfiRoutes.routes.createFact }
                  renderScene={ (route, navigator) =>
                    route.renderScene(route, navigator)
                  }
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </SideMenu>
    )
  }
}
