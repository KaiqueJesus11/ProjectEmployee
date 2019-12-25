import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'

import api from '../services/api'

export default function EmployeesList(Name){
    const [employees, setEmployees] = useState([])
    useEffect(() => {
        async function loadEmployees(){
            const response = await api.get('/Employees', {params: {Name}})
            setEmployees(response.data)
        }
        loadEmployees()
    },[])

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Employees List</Text>
        <FlatList
        style={styles.list}
        data={employees}
        keyExtractor={item => ''+item.EmployeeID}
        renderItem={({item}) => (
            <View style = {styles.listItem}>
            <Text style = {styles.listText}> Name: {item.Name}</Text>
            <Text style = {styles.listText}> Position: {item.Position}</Text>
            <Text style = {styles.listText}> Salary: {item.Salary}</Text>
            <Text style = {styles.listText}> Age: {item.age}</Text>
            </View>
        )}
       />
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 20
    },
    title:{
        fontSize: 20,
        color: '#444',
        marginBottom: 15
    },
    listItem:{
        alignItems: "center",
        backgroundColor: "#dcda48",
        flexGrow: 1,
        margin: 4,
        padding: 20
    }
})