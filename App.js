import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createRootNavigator } from './src/router';
import { isSignedIn } from './src/auth';

export default class App extends Component {
  state = {
    signedIn: false,
    checkedSignIn: false
  }

  componendDidMount() {
    isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch(() => alert("An error occured"))
  }

  render() {
    const { checkedSignIn, signedIn } = this.state;

    // if (!checkedSignIn) {
    //   return null;
    // }

    const Layout = createRootNavigator(signedIn);
    return <Layout />
  }
}
