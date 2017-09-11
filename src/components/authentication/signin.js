import React, { Component } from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Button from '../common/button';

export default class SignIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Sign In</Text>
        <Text style={styles.label}>Username:</Text>
        <TextInput
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
          style={styles.input} />
        <Text style={styles.label}>Password:</Text>
        <TextInput
          secureTextEntry={true}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          style={styles.input} />
        <Button text={'Sign In'} onPress={this.onPress} />
      </View>
    );
  }
  onPress (){
    // Log the user in
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    padding: 4,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 200,
    alignSelf: 'center',
  },
  label: {
    fontSize: 18
  },
});
