import React, { Component } from "react";
import { StyleSheet, ImageBackground, View, Text } from 'react-native';
import FlatButton from "./button";

export class GymClass extends Component {

    screen = ({ navigation, route }) => {
        return (
            <ImageBackground source={require('./gymPhoto.jpg')} style={styles.container}>
                <View>
                    <View style={styles.box}>
                        <Text style={styles.titleText}> Choose a
                        <Text style={{ color: '#845996' }}>{"\n"} muscle group </Text>
                         or {"\n"} <Text style={{ color: '#845996' }}> work your whole body
                    </Text></Text>
                    </View>
                    <FlatButton text="Core" onPress={() => navigation.navigate('Core')} />
                    <FlatButton text="Lower Body" onPress={() => navigation.navigate('LowerBody')} />
                    <FlatButton text="Upper Body" onPress={() => navigation.navigate('UpperBody')} />
                    <FlatButton text="Circuit" onPress={() => navigation.navigate('FullBody')} />
                </View>
            </ImageBackground>
        );


    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'cover',
        flexDirection: 'column',
    },
    titleText: {
        paddingLeft: 5,
        fontSize: 30,
        color: '#ead8f2',
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: '400'
    },
    box: {
        backgroundColor: '#000000',
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: '#000',
        padding: 10,
        margin: 30,
        opacity: 0.8,
    },

})


export default GymClass;
