import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function TempoButton({ text, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{ text }</Text>
            </View>
        </TouchableOpacity>
    )   
} 

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#000000',
        marginLeft: 40,
        marginRight: 40,
        opacity: 0.7,
        marginTop: 10
    },
 
    buttonText: {
        color: '#0000ff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center'
    }
})