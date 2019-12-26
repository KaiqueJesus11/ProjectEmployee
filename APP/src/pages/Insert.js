import React, {useState} from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Alert,
  TextInput,
  Dimensions
} from 'react-native';

const width = Dimensions.get('window').width
import api from '../services/api'

const AddEmployees = ({navigation}) => {
const [name, setName] = useState('');
const [position, setPosition] = useState('');
const [salary, setSalary] = useState('');
const [age, setAge] = useState('');
    function list(){
        navigation.navigate('List')
     }
     
async function addEmployee() {
    const cont = {
        "Name": name,//estado.nome
        "Position": position,//estado.pos
        "Age": age,//estado.idade
        "Salary": salary//estado.salario
    }
    await api.post('/Employees', cont)
    alert('Sucess!');
    setName("")
    setPosition("")
    setSalary("")
    setAge("")

}
    return (
        <View style={styles.container}>
        <Text style={styles.texto}>Employees</Text>
          <View style={styles.titleHead}>
            <Text style={styles.title}>Register new Employee</Text>
            <TouchableOpacity onPress={list} style={styles.button}>
            <Text style={styles.buttonText}>List</Text>
            </TouchableOpacity>
        </View>
        <View>
        <Text style={styles.label}>Name:</Text>
        <TextInput style={styles.input}
                   placeholder=" Name"
                   placeholderTextColor="#999"
                   value={name}
                   onChangeText={setName}
                   />
        <Text style={styles.label}>Position:</Text>
        <TextInput style={styles.input}
                   placeholder=" Position"
                   placeholderTextColor="#999"
                   value={position}
                   onChangeText={setPosition}
                   />
        <Text style={styles.label}>Salary:</Text>        
        <TextInput style={styles.input}
                   placeholder=" Salary"
                   placeholderTextColor="#999"
                   value={salary}
                   onChangeText={setSalary}
                   />
        <Text style={styles.label}>Age:</Text>
        <TextInput style={styles.input}
                   placeholder=" Age"
                   placeholderTextColor="#999"
                   value={age}
                   onChangeText={setAge}
                   />
      </View>
      <TouchableOpacity onPress={addEmployee} 
      style={styles.buttonAdd}>
            <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
      </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    search:{
      flexDirection: "row",
      paddingHorizontal: width * 0.13,
  
    },
    head:{
      backgroundColor: '#dcda48',
      flexDirection: "row",
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
      marginLeft: width * 0.18
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
    },
    label:{
    },
    buttonAdd:{
        height:42,
        backgroundColor: '#4449',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:4,
        width: width * 0.7,
    }
  });

export default AddEmployees
