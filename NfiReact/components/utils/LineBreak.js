import React, { Component } from 'react';
import {
    View,
    StyleSheet,
} from 'react-native'

export class LineBreak extends Component {

  constructor(props:Object) {
    super(props)
  }

  render() {

    return (
        <View style={{marginLeft: 6, height: 7}}>
          <View style={styles.triangle}/>
          <View style={styles.lineBreak}/>
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
    borderBottomWidth: 6,
    borderRightWidth: 6,
    borderLeftWidth: 0,
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderBottomColor: '#DDD'
  },
  lineBreak: {
    borderTopColor: '#DDD',
    borderTopWidth: 1,
  }
})