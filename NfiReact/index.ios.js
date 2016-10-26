'use strict'

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { NfiReact } from './components/NfiReact.js'

console.log('what is di?')

export default class IosNfiReact extends Component {

  render() {

    console.log("At a spot I like")

    return (
      <NfiReact/>
    );
  }
}

AppRegistry.registerComponent('NfiReact', () => IosNfiReact);
