import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function Button({ label, ...rest}) {
    return (
        <TouchableOpacity {...rest} style={styles.container}>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#e5293e',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        height: 60,
        marginVertical: 10,
        alignSelf: 'center'
    },
    label: {
        fontSize: 16,
        color: "#fff",
        fontWeight: 'bold'
    }
})