/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
    Animated,
    Dimensions,
    Navigator,
    ScrollView,
    StyleSheet,
    Text,
    TouchableHighlight,
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
    CreateMemorizationFlow,
} from './core/'
import {
    SideMenu,
    LowerRightOverlayButton,
    LineBreak,
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

    const { height } = Dimensions.get('window')

    return (
     <SideMenu
         showMenu={this.state.showMenu}
         menuComponent={
           <View style={{flex: 1, backgroundColor: 'black'}}>
           {
             [1,2,3].map((item, index) => (
               <View key={index}>
                 <Text style={{color: 'white'}}>got index {index}, key {item}</Text>
                 <LineBreak/>
               </View>
             ))
           }
           </View>
         }
     >
       <View style={styles.container}>
         <TouchableWithoutFeedback style={{flex: 1}} onPress={ () => this.closeMenu() }>
           <View style={{flex: 1}}>

             <View style={styles.topMenu}>
               <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold' }}>NeverForget.it</Text>
               <Icon name='menu' reverse onPress={ () => this.toggleMenu() }/>
             </View>

             <View style={{flex: 1, margin: 12}}>
               <CreateMemorizationFlow/>
             </View>


             <LowerRightOverlayButton>
               <View style={{alignItems: 'flex-end'}}>
                 <TouchableHighlight style={{flex: 1, margin: 12, padding: 12}}>
                   <Text style={{color: 'blue', fontSize: 18, fontWeight: 'bold'}}>Remember =></Text>
                 </TouchableHighlight>
               </View>
             </LowerRightOverlayButton>

           </View>
         </TouchableWithoutFeedback>
       </View>
     </SideMenu>
     )

    /*return (
        <View style={{flex: 1}}>
          <View style={{flex: 1, backgroundColor: 'gray'}}>
            <View style={{flex: 1}}><Text>div 1</Text></View>
          </View>
          <View style={{flex: 1, backgroundColor: 'blue'}}><Text>div 2</Text></View>
          <View style={{top: 100, bottom: 0, right: 0, left: 0, flex: 1, position: 'absolute', justifyContent: 'space-between'}}>
            <View style={{flex: 1, backgroundColor: 'yellow'}}><Text>div 3</Text></View>
            <View style={{flex: 1, backgroundColor: 'green'}}><Text>div 4</Text></View>
          </View>
          <View style={{}}></View>
        </View>
    )*/
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