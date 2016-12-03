import React, { Component } from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
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
    LineBreak,
} from '../utils/'
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

  touchedImage(imageData) {
    console.log('teh image data', imageData)
  }

  render() {

    var createMemorizationRoutes:NfiRoutes = NfiApp.di.get('CreateMemorizationRoutes')

    console.log('new foo route')

    return (
        <View style={{flex: 1, backgroundColor: 'white', shadowColor: '#AAAAAA', shadowOffset: {width: 3, height: 1}, shadowOpacity: 1,shadowRadius: 10}}>
          <View style={{margin: 12, overflow: 'hidden'}}>
            <Image style={{width: 375 - 48, height: 200}} source={require('../../assets/placeholder.png')}/>
            <ScrollView scrollEnabled={true} horizontal={true} style={{maxHeight: 96, paddingTop: 6, paddingBottom: 6, flexDirection: 'row'}}>
              <TouchableOpacity onPress={(element) => this.touchedImage(element)}>
                <Image id={1} style={{maxWidth: 72, maxHeight: 72, marginRight: 2}} source={require('../../assets/camera_roll/20161102_082128.jpg')}/>
              </TouchableOpacity>
              <Image style={{maxWidth: 72, maxHeight: 72, marginRight: 2}} source={require('../../assets/camera_roll/20161102_082151.jpg')}/>
              <Image style={{maxWidth: 72, maxHeight: 72, marginRight: 2}} source={require('../../assets/camera_roll/20161102_082128.jpg')}/>
              <Image style={{maxWidth: 72, maxHeight: 72, marginRight: 2}} source={require('../../assets/camera_roll/20161102_082128.jpg')}/>
              <Image style={{maxWidth: 72, maxHeight: 72, marginRight: 2}} source={require('../../assets/camera_roll/20161102_082151.jpg')}/>
              <Image style={{maxWidth: 72, maxHeight: 72, marginRight: 2}} source={require('../../assets/camera_roll/20161102_082128.jpg')}/>
            </ScrollView>
          </View>
          <Text>teh flowz are here</Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  triangle: {
    height: 0,
    width: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderBottomWidth: 12,
    borderRightWidth: 12,
    borderLeftWidth: 0,
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderBottomColor: '#DDD'
  }
})
