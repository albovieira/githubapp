import Organizations from "../..";
import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";
import { colors } from "styles";
import PropTypes from "prop-types";

export default class Organization extends Component {
  static propTypes = {
    organization: PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.string
    }).isRequired
  };

  render() {
    const organization = this.props.organization;
    return (
      <View style={styles.container}>
        <Image
          style={styles.avatar}
          source={{
            uri: organization.avatar_url
          }}
        />
        <Text style={styles.title}>{organization.login}</Text>
      </View>
    );
  }
}
