import { useNavigation } from '@react-navigation/native'
import React, { useContext, useEffect } from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import UserContext from '../context/User'

export default function Initial() {
    const {getUser} = useContext(UserContext)
    const {navigate} = useNavigation()
    useEffect(() => {
        handleUserSigned();
    }, [])

    const handleUserSigned = async () => {
        const signed = await getUser();
        if(signed.success){
            navigate('List')
        }else{
            navigate('Login')

        }
    }
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#e5293e" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})