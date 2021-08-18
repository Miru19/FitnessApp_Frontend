import React, { Component } from "react";
import { StyleSheet, ImageBackground, View, Text, Image } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import KickButton from './KickButton';
import { Video } from 'expo-av';
// import Video from 'react-native-video';

export class KickBoxTrainings extends Component {

    screen = ({ navigation, route }) => {
        return (
            <ImageBackground source={require('./kickInfo.jpg')} style={styles.container}>
                <ScrollView>
                    <View indicatorStyle='white' style={{ flexDirection: 'column', flex: 1, alignItems: 'flex-start' }}>
                        <View style={{ alignSelf: 'flex-start', marginBottom: 30, marginTop: 70, marginLeft: 9 }}>
                            <Text style={styles.baseText}>
                                Trainings
                            </Text>

                            <View style={styles.textWithTitle}>
                                <View style={{ alignSelf: 'flex-start', marginBottom: 10, marginLeft: 9 }}>
                                    <Text style={styles.Title}>
                                        <Text style={styles.innerText}>Basic </Text>Kickboxing Techniques
                                </Text>
                                    <Text style={styles.introductionText}>
                                    So, for the start, we should always know the basics. If you master the basics, there is very big chance, to be already betten then the opponent.
                                    Remeber this, the basics are the most important thing in this sport, in fact in every sport. So, let's begin with this Basic Kickboxing Techniques tutorial.
                                    Have fun !
                                     </Text>
                                    <View style={{ marginTop: 15 }}>
                                        <Video source={require('./kickTraining1.mp4')}
                                            rate={1.0}
                                            volume={1.0}
                                            isMuted={false}
                                            resizeMode='stretch'
                                            shouldPlay={false}
                                            useNativeControls={true}
                                            style={{ width: 320, height: 210, borderRadius: 10 }}
                                        />
                                    </View>
                                </View>
                            </View>

                            <View style={styles.textWithTitle}>
                                <View style={{ alignSelf: 'flex-start', marginBottom: 10, marginLeft: 9 }}>
                                    <Text style={styles.Title}>
                                        <Text style={styles.innerText}>Combos </Text>Training
                                </Text>
                                    <Text style={styles.introductionText}>
                                    After you practiced the basics, you should start making combos. When you fight, almost everytime you use combos.
                                     Practicing Combos makes your combination of kicks and punches be more quicker, stronger and correct.
                                      Speed is an important factor in this sport, so the more you know combos, the faster you will throw them at your opponent.
                                      Here are some combos for you: 
                                     </Text>
                                    <View style={{ marginTop: 15 }}>
                                        <Video source={require('./kickTraining2.mp4')}
                                            rate={1.0}
                                            volume={1.0}
                                            isMuted={false}
                                            resizeMode='stretch'
                                            shouldPlay={false}
                                            useNativeControls={true}
                                            style={{ width: 320, height: 210, borderRadius: 10 }}
                                        />
                                    </View>
                                </View>
                            </View>

                            <View style={styles.textWithTitle}>
                                <View style={{ alignSelf: 'flex-start', marginBottom: 10, marginLeft: 9 }}>
                                    <Text style={styles.Title}>
                                        <Text style={styles.innerText}>Fitness </Text>Training
                                </Text>
                                    <Text style={styles.introductionText}>
                                   Kickbox isn't used for fighting only. It is as well a very good cardio sport and one thing is for sure, to fight you must have phisical training.
                                   Without conditioning, you can't go a full round with a better prepaired opponent. If you can do the workout below with no pause, I must say, you are impressed !!
                                   If you can't then, GO ON AND DO IT UNTILL YOU CAN. Everything is possible. This is my challenge for you, do this workout without pausing it. Let't begin :). 
                                     </Text>
                                    <View style={{ marginTop: 15 }}>
                                        <Video source={require('./kickTraining3.mp4')}
                                            rate={1.0}
                                            volume={1.0}
                                            isMuted={false}
                                            resizeMode='stretch'
                                            shouldPlay={false}
                                            useNativeControls={true}
                                            style={{ width: 320, height: 210, borderRadius: 10 }}
                                        />
                                    </View>
                                </View>
                            </View>

                            <View style={{ backgroundColor: 'black', borderRadius: 15, opacity: 0.8 }}>
                                <Text style={{ paddingLeft: 6, fontSize: 16, color: 'red', marginTop: 10 }}>
                                    Congrats, you are a better fighter already !! Practice is the key to succes, so don't stop here, practice in your free time.
                                    Practice when you feel stressed. Practice when everything seems hard. Sport cand eliberate you from all the dark emotions you have.
                                    So practice, get better, phisical and pshychical.
                        </Text>
                            </View>

                            <View style={{ marginBottom: 30, alignSelf: 'center', width: 300 }}>
                                <KickButton stepText="Back to " text="SPORTS"onPress={() => navigation.navigate("Let's get started!")} />
                            </View>
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
        fontSize: 35,
        alignSelf: 'center'
    },

    innerText: {
        color: 'red',
        fontWeight: 'bold'
    },

    introductionText: {
        color: 'white',
        paddingLeft: 6,
        fontSize: 13

    },
    texts: {
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        borderRadius: 15
    },

    Title: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20
    },

    textWithTitle: {
        marginTop: 30,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        borderRadius: 15,
        marginRight: 15
    }

});

export default KickBoxTrainings;