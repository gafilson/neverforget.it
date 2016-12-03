import React, { Component } from 'react';
import {
    Animated,
    Dimensions,
    Easing,
    View
} from 'react-native'

export class LowerRightOverlayButton extends Component {

  constructor(props:Object) {
    super(props)

    const { width } = Dimensions.get('window')

    console.log('got teh width', width)

    this.state = {
      slideInAnimationRight: new Animated.Value(width * 0.5),
      slideInAnimationLeft: new Animated.Value(-(width * 0.5)),
    }
  }

  componentWillMount() {

    Animated.timing(this.state.slideInAnimationRight, {
      toValue: 0,
      duration: 100,
      easing: Easing.inout,
    }).start()

    Animated.timing(this.state.slideInAnimationLeft, {
      toValue: 0,
      duration: 250,
      easing: Easing.inout,
    }).start()

  }

  render() {

    return (
        <Animated.View style={[{flex: 1, left: this.state.slideInAnimationLeft, bottom: 0, right: this.state.slideInAnimationRight, position: 'absolute', backgroundColor: 'rgba(0,0,0,0)'}, this.props.buttonStyle]}>
          {this.props.children}
        </Animated.View>
    )
  }
}