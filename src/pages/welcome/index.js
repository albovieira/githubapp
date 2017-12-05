import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  ActivityIndicator
} from "react-native";
import styles from "./styles";
import { NavigationActions } from "react-navigation";
import PropTypes from "prop-types";
import api from "services/api";

export default class Welcome extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func
    }).isRequired
  };

  static navigationOptions = {
    header: null
  };

  state = {
    username: "",
    error: false,
    loading: false,
  };

  check = async () => {
    const response = await api.get(`/users/${this.state.username}`);
    return response.ok;
  };

  save = async () => {
    if (await this.check()) {
      return await AsyncStorage.setItem(
        "@Githuber:username",
        this.state.username
      );
    }
    throw Error();
  };

  navigationToUser = () => {
    if (this.state.username.length === 0) return;

    //put ActivityIndicator to show a loading
    this.setState({loading:true});

    this.save()
      .then(() => {
        const { dispatch } = this.props.navigation;
        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: "User" })]
        });
        dispatch(resetAction);
      })
      .catch(() => {
        this.setState({ error: true, loading: false });
      });

    /* const { navigate } = this.props.navigation;
    navigate('User'); */
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeTitle}>Bem Vindo</Text>
        <Text style={styles.welcomeDescription}>
          Para continuar, informe seu usuário do github
        </Text>

        { this.state.error && <Text style={styles.error}>Esse usuário não existe</Text> }

        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          placeholder="Digite seu usuário"
          onChangeText={username => {
            this.setState({ username });
          }}
        />

        <TouchableOpacity onPress={this.navigationToUser} style={styles.button}>
        { 
            this.state.loading ? <ActivityIndicator size="small"  />
            : <Text style={styles.buttonText}>Prosseguir</Text>
        }
        </TouchableOpacity>
      </View>
    );
  }
}
