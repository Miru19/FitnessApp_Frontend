import React, { Component } from "react";
import { StyleSheet, Text, View, ImageBackground, Alert } from 'react-native';
import { TextInput } from "react-native-gesture-handler";
import KickButton from './kickFolder/KickButton';
import Icon from 'react-native-vector-icons/FontAwesome';

export class KickboxClass extends Component {

    screen = ({ navigation, route }) => {
        return (
            <ImageBackground source={require('./kickboxPage.jpg')} style={styles.container}>
                <View style={{ flexDirection: 'column', flex: 1, alignItems: 'flex-start' }}>
                    <View style={{ alignSelf: 'flex-start', marginBottom: 30, marginTop: 70, marginLeft: 9 }}>
                        <Text style={styles.baseText}>
                            {route.params.name}, welcome to the
                        <Text style={styles.innerText}> Kickbox page </Text>
                            <Text style={styles.baseText}>
                                !
                        </Text>
                        </Text>
                    </View>

                    <View style={{ backgroundColor: 'rgba(52, 52, 52, 0.8)', borderRadius: 15 }}>
                        <Text style={styles.introductionText}>
                            I'm glad you chose
                        <Text style={styles.innerText}> Kickboxing</Text>
                        ! This sport is complex, so, for the beginning,
                        we shall go through
                        <Text style={styles.innerText}> 4 BIG STEPS</Text>. Don't worry, if you're not new to this sport, you can skip them.
                        Let's get
                        <Text style={styles.innerText}> LOCKED IN </Text>
                            <Icon name="lock" size={15} color="red" /> !!
                    </Text>
                    </View>

                    <View style={{ justifyContent: 'center' }}>
                        <KickButton stepText="Step 1  " text="Introduction to this sport" onPress={() => navigation.navigate('KickBoxInfo')} />
                        <KickButton stepText="Step 2  " text="Equipment" onPress={() => navigation.navigate('KickBoxGear')} />
                        <KickButton stepText="Step 3  " text="The basics" onPress={() => navigation.navigate('KickBoxBasics')} />
                        <KickButton stepText="Step 4  " text="Trainings" onPress={() => navigation.navigate('KickBoxTrainings')} />
                    </View>
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
        flexDirection: 'column'
    },

    baseText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 19
    },

    innerText: {
        color: 'red',
        fontWeight: 'bold'
    },

    introductionText: {
        color: 'white',
        fontStyle: "italic",
        paddingLeft: 6,
        fontSize: 16

    }

})


export default KickboxClass;
