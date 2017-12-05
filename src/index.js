import 'config/reactotron';
import React, { Component } from "react";
import createRootNavigator from "./routes";
import { AsyncStorage } from 'react-native';

export default class App extends Component {

  state = {
    exists: false,
    checked: false
  };

  componentWillMount(){
    this.userAlreadyExist().then((res) => {
      console.tron.log(res);
      this.setState({ exists: res, checked: true });
    });
  };

  userAlreadyExist = async () => {
    const user  = await AsyncStorage.getItem('@Githuber:username');
    return user !== null;
  };

  render() {
    const {checked, exists} = this.state;
    if(!checked) return null;

    const Layout = createRootNavigator(exists)
    return (
        <Layout />
    );
  };
}
