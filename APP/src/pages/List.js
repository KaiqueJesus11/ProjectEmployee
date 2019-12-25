import React, {useState} from 'react'
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

import EmployeesList from '../components/EmployeesList'

const width = Dimensions.get('window').width

export default function List (){
const [names, setNames] = useState('');

async function searchSubmit(){
 <EmployeesList></EmployeesList>
}

    return (
      <View style={styles.container}>
        <Text style={styles.texto}>Employees</Text>
        
        <SafeAreaView>
        <View style={styles.search}>
        <TextInput style={styles.input}
                   placeholder=" Input name"
                   placeholderTextColor="#999"
                   value={names}
                   onChangeText={setNames}
                   />
          <TouchableOpacity  onPress={searchSubmit}  style={styles.button}>
          <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
          </View>
          
          <EmployeesList Name={names}></EmployeesList>
        </SafeAreaView>
      </View>
    );
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
    color: '#dcda48',
  },
  item: {
    width: width * 0.9,
    backgroundColor: "orange",
    margin: 4,
    padding: 20,
    paddingHorizontal: 20,
  }
});
