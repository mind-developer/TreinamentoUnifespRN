import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function User({item}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.subtitle}>{item.email}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        elevation: 2,
        borderRadius: 15,
        padding: 10,
        width: '100%',
        marginVertical: 10
    },
    title: {
        fontSize: 24,
        color: "#e5293e",
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 20,
        color: '#6c778d'
    }
})