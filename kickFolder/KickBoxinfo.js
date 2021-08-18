import React, { Component } from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';
import KickButton from './KickButton';

export class KickBoxInfo extends Component {

    screen = ({ navigation, route }) => {
        return (
            <ImageBackground source={require('./kickInfo.jpg')} style={styles.container}>
                <ScrollView>
                    <View indicatorStyle = 'white' style={{ flexDirection: 'column', flex: 1, alignItems: 'flex-start' }}>
                        <View style={{ alignSelf: 'flex-start', marginBottom: 30, marginTop: 70, marginLeft: 9 }}>
                            <Text style={styles.baseText}>
                                What is
                        <Text style={styles.innerText}> Kickboxing </Text>
                                ??
                        </Text>
                        </View>

                        <View style={styles.texts}>
                            <Text style={styles.introductionText}>
                                Kickboxing is a stand-up combat sport that is a mix of Karate, Muay Thai and Western Boxing.
                                It combines powerful kicks from Karate and agile handwork from boxing and is practiced as for fitness, self-defense and also as a contact sport.
                        </Text>
                        </View>

                        <View style={{ flexDirection: 'row', width: 146, marginTop: 20 }}>
                            <View style={styles.texts}>
                                <Text style={styles.introductionText}>
                                    Besides being a wonderful sport, kickboxing is now taken up as a fitness routine by a lot of people.
                                    Some of the top Victoria’s Secret models incorporate boxing into their workout routines.
                            </Text>
                            </View>
                            <Image source={require('./whatIsKickbox.jpg')} style={{ height: 200, width: 200, borderRadius: 15, marginLeft: 5 }} />
                        </View>

                        <View style={styles.textWithTitle}>
                            <View style={{ alignSelf: 'flex-start', marginBottom: 10, marginLeft: 9 }}>
                                <Text style={styles.Title}>
                                    Why Kickboxing
                        <Text style={styles.innerText}> Is The Best Fitness Routine </Text>?
                                </Text>
                            <Text style={styles.introductionText}>
                            Cardio kickboxing is a group fitness class that combines martial arts techniques with fast-paced cardio.
                             This high-energy workout challenges the beginner and elite athlete alike.
                              Build stamina, improve coordination and flexibility, and burn calories as you build lean muscle with this fun and challenging workout.
                            </Text>
                            </View>
                        </View>

                        <View style={{marginTop: 20 }}>
                            <View style={styles.texts}>
                            <Text style={styles.introductionText}>
                                    Here, you have a picture with 5 reasons you should start kickboxing right now !!
                            </Text>
                            </View>

                            <Image source={require('./kickBoxRoutine.jpg')} style={{ height: 370, width: 350, borderRadius: 15, marginLeft: 5, marginTop: 20 }} />
                        </View>

                        <View style={{ backgroundColor: 'black', borderRadius: 15, opacity: 0.8, marginTop: 20 }}>
                        <Text style={{color: 'red', paddingLeft: 6, fontSize: 16}}>
                            Well, enough with all this talking, let's go trough the gear you need. Here, I put the button below for you :).
                        </Text>
                        </View>

                        <View style ={{marginBottom: 30, alignSelf: 'center', width: 300}}>
                        <KickButton stepText = "Step 2  " text="Equipment" onPress={()=> navigation.navigate('KickBoxGear')} />
                        </View>
                    </View>
                </ScrollView>

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
        fontSize: 35
    },

    innerText: {
        color: 'red',
        fontWeight: 'bold'
    },

    introductionText: {
        color: 'white',
        paddingLeft: 6,
        fontSize: 16

    },
    texts: {
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        borderRadius: 15
    },

    Title: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 25
    },

    textWithTitle: {
        marginTop: 30,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        borderRadius: 15
    }

});

export default KickBoxInfo;