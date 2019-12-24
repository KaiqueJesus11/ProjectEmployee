

import React from 'react'
import axios from 'axios'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Dimensions
} from 'react-native';

const width = Dimensions.get('window').width
import api from '../services/api'

export default class List extends React.Component {

  initialState = {
    data: [],
    isRefreshing: false
  }

  constructor(props) {
    super(props)
    this.state = this.initialState
  }

  componentDidMount() {
      this._getLista()
  }

  _getLista() {
    this.setState({...this.state, isRefreshing : true})
    api.get().then(response => {
      if (response.data) {
        this.setState({ ...this.state, data: response.data, isRefreshing : false})
      }
    }).catch(error => {
      console.log(error)
      this.setState({...this.state, isRefreshing : false})
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>Employees</Text>
        <SafeAreaView>
          <FlatList
            keyExtractor={(_, index) => index.toString()}
            data={this.state.data}
            refreshing={this.state.isRefreshing}
            onRefresh={() => this._getLista()}
            renderItem={({ item }) => {
              return (
                <View style={styles.item}>
                  <Text style={styles.conteudo}>ID: {item.EmployeeID}</Text>
                  <Text style={styles.conteudo}>Name: {item.Name}</Text>
                  <Text style={styles.conteudo}>Position: {item.Position}</Text>
                  <Text style={styles.conteudo}>Age: {item.age}</Text>
                  <Text style={styles.conteudo}>Salary: {item.Salary}</Text>
                </View>
              )
            }} />
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '15%'
  },
  conteudo: {
    color: "#fff"
  },
  texto: {
    fontSize: 30,
    margin: 20,
    color: 'orange',
  },
  item: {
    width: width * 0.9,
    backgroundColor: "orange",
    margin: 4,
    padding: 20,
  }
});
