import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { Icon } from 'react-native-elements'

export default function KickButton({ stepText, onPress, text }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
            <Text style={styles.stepButtonText}>{stepText}<Icon reverse name='play' type='font-awesome' color='red' size = {4}/></Text>
                <Text style={styles.buttonText}>
                    {text}</Text>
            </View>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: 'grey',
        marginLeft: 40,
        marginRight: 40,
        opacity: 0.8,
        marginTop: 30,
    },

    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 20,
        textAlign: 'center',
    },
    stepButtonText: {
        color: 'red',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 17,
        textAlign: 'center'
    }
})