import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'

import api from '../services/api'
import { green } from '@material-ui/core/colors'

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
    container:{
        marginHorizontal: 20
    },
    title:{
        fontSize: 20,
        color: '#444',
        marginBottom: 15
    },
    listItem:{
        flexDirection: "row"
    },
    cel:{
        justifyContent: "center",
        alignItems: "center",
        borderStyle: 'solid',
        borderWidth:1,
        height: 40,
        width: 95.1,
        flexDirection: 'row',
        borderLeftWidth:0.5,
        borderBottomWidth:0.5
    },
    head:{
        backgroundColor: '#dcda48',
        flexDirection: "row",
    },
    headCel:{
        justifyContent: "center",
        alignItems: "center",
        borderStyle: 'solid',
        borderWidth:1,
        height: 40,
        width: 95.1,
        flexDirection: 'row',
        borderLeftWidth:0.5,
        borderBottomWidth:0.5
    }
})