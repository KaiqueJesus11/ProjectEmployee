import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions} from 'react-native'


import api from '../services/api'
import { red } from '@material-ui/core/colors'
const width = Dimensions.get('window').width

export default function EmployeesList(Name){
    const [employees, setEmployees] = useState([])
    useEffect(() => {
        async function loadEmployees(){
            const response = await api.get('/Employees')
            setEmployees(response.data)
        }
        loadEmployees()
    },[])   

    if(Name != ""){
        searchEmployee(Name.Name)
    }
    else{
        const response = api.get('/Employees')
        setEmployees(response.data)
    }

    async function searchEmployee(Name){
       var alvo = employees;
       var index;
       for(var i in alvo){
          if(alvo[i].Name == Name){
             index = i;
             break; // suspende o laço caso tenha encontrado uma ocorrência
          }
       }
       if(employees[index] != undefined){
           var newEmployees = employees[index]
           console.log(newEmployees)
       }
    }
    async function deleteEmployee(id) {
        await api.delete(`/Employees/${id}`)
        alert('Deleted!');
        const response = await api.get('/Employees')
        setEmployees(response.data)  
    }
    return(
        <View style={styles.container}>
        <View style = {styles.head}>
        <View style = {styles.headCel}><Text>Name</Text></View>
        <View style = {styles.headCelPosition}><Text>Position</Text></View>
        <View style = {styles.headCel}><Text>Salary</Text></View>
        <View style = {styles.headCel}><Text>Age</Text></View>
        <View style = {styles.headCel}><Text>Action</Text></View>
        </View>
        <FlatList
        style={styles.list}
        data={employees}
        keyExtractor={item => ''+item.EmployeeID}
        renderItem={({item}) => (
            <View style = {styles.listItem}>
            <View style = {styles.celName}><Text>{item.Name}</Text></View>
            <View style = {styles. celPositionSalary}><Text>{item.Position}</Text></View>
            <View style = {styles. celPositionSalary}><Text>{item.Salary}</Text></View>
            <View style = {styles. celAge}><Text>{item.age}</Text></View>
            <View style = {styles.celAction}><TouchableOpacity onPress={() => deleteEmployee(item.EmployeeID)}><Text style = {styles.textDel}>Delete</Text></TouchableOpacity></View>
            </View>
        )}
       />
        </View>

    )
}

const styles = StyleSheet.create({
    listItem:{
        flexDirection: "row",
        borderWidth: 0.6
    },
    celName:{
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        width: width * 0.25 - 3.2,
        flexDirection: 'row',
    },
    textDel:{
        color:'red'
    },
     celPositionSalary:{
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        width: width * 0.25 - 3.2,
        flexDirection: 'row',
        marginLeft: width * -0.01 - 11
    },     
      celAge:{
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        width: width * 0.22 - 3.2,
        flexDirection: 'row',
        marginLeft: width * -0.01 - 18,
        marginRight: width * 0.13 - 18,
    },
    celAction:{
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        width: width * 0.19 - 3.2,
        flexDirection: 'row',
        marginLeft: width * -0.01 - 32
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
        width: width * 0.19 + 0.9,
        flexDirection: 'row',
        paddingLeft: 5
    },
    headCelPosition:{
        justifyContent: "center",
        alignItems: "center",
        borderStyle: 'solid',
        borderWidth:0.6,
        height: 40,
        width: width * 0.23 + 0.9,
        flexDirection: 'row',
        paddingLeft: 5
    },
  })