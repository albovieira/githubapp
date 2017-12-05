import React, { Component } from "react";
import {
  ScrollView,
  View,
  Text,
  AsyncStorage,
  ActivityIndicator,
  FlatList,
  RefreshControl
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";
import Repository from "./components/repository";
import api from "services/api";

export default class Repositories extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="list-alt" size={20} color={tintColor} />
    )
  };

  state = {
    repositories: [],
    loading: false,
    refreshing: false
  };

  componentWillMount() {
    this.setState({ loading: true });
    this.loadRepositories().then(() => {
      this.setState({ loading: false });
    });
  }

  loadRepositories = async () => {
    this.setState({ refreshing: true });
    const username = await AsyncStorage.getItem("@Githuber:username");
    const response = await api.get(`/users/${username}/repos`);
    this.setState({ repositories: response.data, refreshing: false });
  };

  renderRepositories = () => (
    <FlatList
      refreshControl={
        <RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={this.loadRepositories}
        />
      }
      data={this.state.repositories}
      keyExtractor={repository => repository.id}
      renderItem={({ item }) => <Repository repository={item} />}
    />
  );

  renderList = () =>
    this.state.repositories.length ? (
      this.renderRepositories()
    ) : (
      <Text style={styles.empty}>Nenhum repositório encontrado</Text>
    );

  render() {
    return (
      <View style={styles.container}>
        {this.state.loading ? (
          <ActivityIndicator size="small" />
        ) : (
          this.renderList()
        )}
      </View>
    );
  }
}
