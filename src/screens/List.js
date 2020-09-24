import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import User from '../components/User'
import UserContext from '../context/User';
import api from '../services/api'

export default function List() {
    const [users, setUsers] = useState([]);
    const {user, resetUser} = useContext(UserContext)
    const {navigate} = useNavigation()

    const handleLogout = async () => {
        navigate('Login')
        await resetUser();
    }
    
    const getUsers = async () => {
        try {
            const response = await api.get('/users')
            if(response.status == 200){
                // console.log(response.data)
                const users = response.data.sort((a, b) => b.id - a.id)
                setUsers(users)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUsers();
    },[])
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Olá {user?.name}</Text>
                <Text style={styles.subtitle}>{user?.email}</Text>
            <TouchableOpacity onPress={handleLogout}>
                <Text style={[styles.subtitle,{alignSelf: 'flex-end'}]}>Sair</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.content}>
                {/* <ScrollView contentContainerStyle={{width: '100%'}} >
                    {users.map((item, index) => {
                        return(
                            <User key={item.id.toString()} item={item} />
                        )
                    })}
                </ScrollView> */}
                <FlatList data={users.sort((a, b) => b - a)} keyExtractor={(item, index) => item.id.toString()} renderItem={User} />
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#e5293e',
    },
    content: {
        flex: 6, 
        padding: 10
    },
    title: {
        fontSize: 36,
        color: '#fff',
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize:18, 
        color: "#fff",
        textAlignVertical: 'center'
    },

})  