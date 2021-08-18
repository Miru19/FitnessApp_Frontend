import React, { Component } from "react";
import { StyleSheet, Text, View, ImageBackground, Alert } from 'react-native';
import FlatButton from './button';

export class SecondPage extends Component {

    async AddUser(queryInfo) {

        try {
            let response = await fetch('http://192.168.1.4:1900/fitnessApp/addUser', {
                method: 'POST',
                body: JSON.stringify(queryInfo),
                headers: {
                    "Content-Type": "application/json"
                }
            });
        } catch (error) {
            console.error(error);
        }
    }
    screen = ({ navigation, route }) => {

        if (route.params.name === null || route.params.age === null || route.params.height === null || route.params.weight === null) {
            Alert.alert("Toate campurile trebuie completate!");
            navigation.navigate("Welcome to MBM - Fit!");
            return null;
        } else {
            const queryInfo = {
                name: route.params.name,
                age: route.params.age,
                height: route.params.height,
                weight: route.params.weight
            };
            this.AddUser(queryInfo);
        }

        const BMR = parseInt(66.5 + (13.75 * route.params.weight) + (5.003 * route.params.height) - (6.755 * route.params.age));
        return (
            <ImageBackground source={require('./secondpage.jpg')} style={styles.container}>

                <View style={styles.contentStyle}>
                    <Text style={styles.titleText}>Welcome, {route.params.name}!</Text>
                    <Text style={styles.baseText}>Based on the data you provided to us, {"\n"}
                     your basal metabolic rate is: {BMR} kcal/day</Text>
                    <Text style={styles.chooseText}>Choose your sport:</Text>
                </View>
                <View style={{ marginBottom: '30%' }}>
                    <FlatButton text='Running' onPress={() => navigation.navigate("Running")} />
                    <FlatButton text='Gym' onPress={() => navigation.navigate("Gym")} />
                    <FlatButton text='Kickbox' onPress={() => navigation.navigate("KickBox", { name: route.params.name })} />
                </View>

            </ImageBackground>
        );


    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'cover',
        flexDirection: 'column',
        position: 'relative',
        justifyContent: 'center',
    },

    contentStyle: {
        alignItems: 'center',
        marginBottom: 10,
        marginLeft: 40,
        marginRight: 40,
    },
    baseText: {
        fontSize: 15,
        color: 'white',
        marginBottom: '5%',
    },

    titleText: {
        paddingLeft: 5,
        fontSize: 30,
        color: 'white',
        marginBottom: '7%'
    },

    chooseText: {
        paddingLeft: 5,
        fontSize: 18,
        color: 'white'
    }
})


export default SecondPage;
