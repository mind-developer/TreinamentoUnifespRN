import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

export default function Input({label, ...rest}) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input} {...rest} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 5
    },
    label: {
        color: '#6c778d',
        fontSize: 16,
        marginBottom: 10
    },
    input: {
        width: '100%',
        height: 60,
        borderRadius: 30,
        backgroundColor: '#e7ebed',
        color: '#6c778d',
        paddingLeft: 20,
        fontSize: 16
    }
})