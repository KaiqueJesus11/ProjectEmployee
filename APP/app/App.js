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
import Axios from 'axios';

const width = Dimensions.get('window').width

const URL = 'https://localhost:44339/api/Employees'

export default class App extends React.Component {

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
    axios.get(URL).then(response => {
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
        <Text style={styles.texto}>Lista de funcionarios</Text>
        <SafeAreaView>
          <FlatList
            keyExtractor={(_, index) => index.toString()}
            data={this.state.data}
            refreshing={this.state.isRefreshing}
            onRefresh={() => this._getLista()}
            renderItem={({ item }) => {
              return (
                <View style={styles.item}>
                  <Text style={styles.conteudo}>{item.EmployeeID}</Text>
                  <Text style={styles.conteudo}>{item.Name}</Text>
                  <Text style={styles.conteudo}>{item.Position}</Text>
                  <Text style={styles.conteudo}>{item.age}</Text>
                  <Text style={styles.conteudo}>{item.Salary}</Text>
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
    color: "#333333"
  },
  texto: {
    alignItems: "center",
    fontSize: 30,
    margin: 20,
    color: '#FF0000',
  },
  item: {
    width: width * 0.9,
    alignItems: "center",
    backgroundColor: "#dcdaD44",
    margin: 4,
    padding: 20
  }
});
