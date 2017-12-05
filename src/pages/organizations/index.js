import React, { Component } from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
// import styles from './styles';

export default class Organizations extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="building" size={20} color={tintColor} />
    )
  };
  render() {
    return (
      <View>
        <Text>orgns</Text>
      </View>
    );
  }
}
