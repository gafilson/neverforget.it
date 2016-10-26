'use strict'

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import * as NfiApp from './core/NfiApp.js'

export default class IosNfiReact extends Component {

  render() {

    console.log("At a spot I like")

    return (
      <NfiApp.MainComponent/>
    );
  }
}

AppRegistry.registerComponent('NfiReact', () => IosNfiReact);
