import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  AsyncStorage
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";
import Organization from "./components/organization";
import api from "services/api";

export default class Organizations extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="building" size={20} color={tintColor} />
    )
  };

  state = {
    organizations: [],
    loading: false
  };

  componentWillMount() {
    this.setState({ loading: true });
    this.loadOrganizations();
  }

  loadOrganizations = async () => {
    const username = await AsyncStorage.getItem("@Githuber:username");
    const response = await api.get(`/users/${username}/orgs`);
    this.setState({ organizations: response.data, loading: false });
  };

  renderOrganizations = () =>
    this.state.organizations.map(organization => (
      <Organization key={organization.id} organization={organization} />
    ));

  renderList = () =>
    this.state.organizations.length ? (
      this.renderOrganizations()
    ) : (
      <Text style={styles.empty}>Nenhuma organização encontrado</Text>
    );

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        {this.state.loading ? (
          <ActivityIndicator size="small" />
        ) : (
          this.renderList()
        )}
      </ScrollView>
    );
  }
}
