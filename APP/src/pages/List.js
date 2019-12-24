import React from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TextInput,
  Dimensions
} from 'react-native';
// import 'bootstrap'
import api from '../services/api'

const width = Dimensions.get('window').width

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
        <View style={styles.search}>
        <TextInput style={styles.input}
                   placeholder="Input name"
                   placeholderTextColor="#999"
                   />
          
          <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
          </View>
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
    paddingTop: '15%',
  },
  conteudo: {
    color: "#fff"
  },
  search:{
    flexDirection: "row",
    paddingHorizontal: 20,

  },
  input:{
    width: width * 0.6,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16,
    color: '#444',
    height: 42,
    marginBottom:20,
    borderRadius: 2 
  },
  button:{
    height:42,
    backgroundColor: '#4449',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:4,
    width: width * 0.2,
  },
  buttonText:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
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
    paddingHorizontal: 20,
  }
});
