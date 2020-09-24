import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import Button from '../components/Button'
import Input from '../components/Input'
import UserContext from '../context/User';
import api from '../services/api';

export default function Login(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const {navigate} = useNavigation()
    const {signinUser} = useContext(UserContext)

    const handleSignin = async () => {
        const user = await signinUser({email, name})
        if(user.success){
            navigate('List')
        }else{
            Alert.alert('Houve um erro')
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>LOGIN</Text>
            </View>
            <View style={styles.content} >
                <Input autoCapitalize="words" value={name} onChangeText={setName} label="NOME: " />
                <Input autoCapitalize="none" value={email} onChangeText={setEmail} label="E-MAIL: " />
            </View>
            <View style={styles.footer} >
                <Button label="ENTRAR" onPress={handleSignin} />
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 15,
        paddingHorizontal: 30
    },
    header: {
        flex: 1,
        justifyContent: 'center'
    },
    content: {
        flex: 3,

    },
    footer: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    title: {
        fontSize: 36,
        color: '#e2593e',
        fontWeight: 'bold'
    }
})
