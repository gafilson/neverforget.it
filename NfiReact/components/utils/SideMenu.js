import React, { Component } from 'react';
import {
    Animated,
    Dimensions,
    Easing,
    View
} from 'react-native'

export class SideMenu extends Component {

  constructor(props:Object) {
    super(props)
    this.state = {
      showMenu: this.props.showMenu,
      menuAnimation: new Animated.Value(0),
    }
  }

  componentWillReceiveProps(props) {

    const windowDimensions = Dimensions.get('window')

    this._menuWidth = windowDimensions.width * 0.85

    Animated.timing(this.state.menuAnimation, {
      toValue: props.showMenu ? windowDimensions.width * 0.85 : 0,
      duration: 250,
      easing: Easing.inout }
    ).start()

  }

  render() {

    const { menuComponent } = this.props
    const { width, height } = Dimensions.get('window')

    return (
        <View style={{flex: 1}}>
          <Animated.View style={{flex: 1, position: 'absolute'}}>
            <View style={[{height, width: this._menuWidth}]}>
              { menuComponent }
            </View>
          </Animated.View>
          <Animated.View style={[ {flex: 1, width}, { left: this.state.menuAnimation} ]} >
            { this.props.children }
          </Animated.View>
        </View>
    )
  }
}