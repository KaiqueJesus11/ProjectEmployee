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

export default function List ({navigation}){
  function addSubmit(){
    navigation.navigate('Insert')
 }
const [names, setNames] = useState('');
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>Employees</Text>
        <View style={styles.search}>
        <TextInput style={styles.input}
                   placeholder=" Search name"
                   placeholderTextColor="#999"
                   value={names}
                   onChangeText={setNames}
                   />
          </View>
          <View style={styles.titleHead}>
            <Text style={styles.title}>Employees List</Text>
            <TouchableOpacity onPress={addSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
        </View>
        
        <SafeAreaView>
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
    paddingTop: '30%',
  },
  search:{
    flexDirection: "row",
    paddingHorizontal: width * 0.13,

  },
  head:{
    backgroundColor: '#dcda48',
    flexDirection: "row",
},
headCel:{
    justifyContent: "center",
    alignItems: "center",
    borderStyle: 'solid',
    borderWidth:0.6,
    height: 40,
    width: width * 0.25 - 3.2,
    flexDirection: 'row'
},
titleHead:{
    flexDirection: "row"
},

title:{
  fontSize: width * 0.05,
  color: '#444',
  marginBottom: width * 0.015
},
  input:{
    width: width * 0.9,
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
    marginLeft: width * 0.43
  },
  buttonText:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: width * 0.04,
  },
  texto: {
    fontSize: width * 0.08,
    margin: width * 0.04,
    color: '#dcda48',
  }
});
