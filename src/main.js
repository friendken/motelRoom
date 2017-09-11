import React, { Component } from 'react';
import {
  NavigatorIOS,
  StyleSheet,
  Text,
  View
} from 'react-native';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, combineReduxers, compose } from 'redux';
// import thunkMiddleware from 'redux-thunk';
// import createLogger from 'redux-logger';
import SignIn from './components/authentication/signin';

export default class Main extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: SignIn,
          title: 'Sign In',
        }}
        style={{flex: 1}}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
