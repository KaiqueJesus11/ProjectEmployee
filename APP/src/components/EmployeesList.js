import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions} from 'react-native'


import api from '../services/api'
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


    return(
        <View style={styles.container}>
        <View style = {styles.head}>
        <View style = {styles.headCel}><Text style = {styles.listText}>Name</Text></View>
        <View style = {styles.headCel}><Text style = {styles.listText}>Position</Text></View>
        <View style = {styles.headCel}><Text style = {styles.listText}>Salary</Text></View>
        <View style = {styles.headCel}><Text style = {styles.listText}>Age</Text></View>
        </View>
        <FlatList
        style={styles.list}
        data={employees}
        keyExtractor={item => ''+item.EmployeeID}
        renderItem={({item}) => (
            <View style = {styles.listItem}>
            <View style = {styles.cel}><Text style = {styles.listText}>{item.Name}</Text></View>
            <View style = {styles.cel}><Text style = {styles.listText}>{item.Position}</Text></View>
            <View style = {styles.cel}><Text style = {styles.listText}>{item.Salary}</Text></View>
            <View style = {styles.cel}><Text style = {styles.listText}>{item.age}</Text></View>
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
    cel:{
        justifyContent: "center",
        alignItems: "center",
        height: 40,
        width: width * 0.25 - 3.2,
        flexDirection: 'row',
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
  })