import Repositories from "../..";
import React, { Component } from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";
import {colors} from 'styles';
import PropTypes from 'prop-types';

export default class Repository extends Component {
  static propTypes = {
    repository: PropTypes.shape({
        full_name: PropTypes.string,
        stargazers_count: PropTypes.number,
        forks_count: PropTypes.number,
        watchers_count: PropTypes.number,
    })
  };

  render() {
    const repository = this.props.repository;  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{repository.full_name}</Text>
        <View style={styles.infoContainer}>
          <View style={styles.info}>
            <Icon name="star" size={14} color={colors.infoIcon} />
            <Text>{repository.stargazers_count}</Text>
          </View>
          <View style={styles.info}>
            <Icon name="code-fork" size={14} color={colors.infoIcon} />
            <Text>{repository.forks_count}</Text>
          </View>
          <View style={styles.info}>
            <Icon name="eye" size={14} color={colors.infoIcon} />
            <Text>{repository.watchers_count}</Text>
          </View>
        </View>
      </View>
    );
  }
}
