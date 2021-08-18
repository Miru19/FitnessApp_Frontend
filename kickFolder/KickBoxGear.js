import React, { Component } from "react";
import { StyleSheet, ImageBackground, View, Text, Image } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import KickButton from './KickButton';
// import Video from 'react-native-video';

export class KickBoxGear extends Component {

    screen = ({ navigation, route }) => {
        return (
            <ImageBackground source={require('./kickInfo.jpg')} style={styles.container}>
                <ScrollView>
                    <View indicatorStyle='white' style={{ flexDirection: 'column', flex: 1, alignItems: 'flex-start' }}>
                        <View style={{ alignSelf: 'flex-start', marginBottom: 30, marginTop: 70, marginLeft: 9 }}>
                            <Text style={styles.baseText}>
                                What do you need to go
                        <Text style={styles.innerText}> Kickboxing </Text>
                                ??
                        </Text>

                            <View style={styles.textWithTitle}>
                                <View style={{ alignSelf: 'flex-start', marginBottom: 10, marginLeft: 9 }}>
                                    <Text style={styles.Title}>
                                        <Text style={styles.innerText}> 1. </Text>Gloves
                                </Text>
                                    <Text style={styles.introductionText}>
                                        The iconic and essential boxing gear: the gloves.
                                        Lightweight MMA gloves or the rounded leather gloves, effective handwear is absolutely essential for all boxers – for the sake of your hands and for the sake of your opponent’s face.
                            </Text>

                                    <Image source={require('./kickGloves.jpg')} style={{ height: 310, width: 310, borderRadius: 15, marginLeft: 5, marginTop: 20 }} />
                                </View>
                            </View>

                            <View style={styles.textWithTitle}>
                                <View style={{ alignSelf: 'flex-start', marginBottom: 10, marginLeft: 9 }}>
                                    <Text style={styles.Title}>
                                        <Text style={styles.innerText}> 2. </Text>Hand Wraps
                                </Text>
                                    <Text style={styles.introductionText}>
                                        You’re wearing your kickboxing gloves.
                                        That’s all good. But when taking boxing very seriously – and doing it a lot – you may want to consider handwraps.

                                        These you wear beneath your gloves, and they provide compression, security, and stability to the muscles and tissue in your hands.
                                        They provide extra protection, essentially – and a harder hit to your opponent.
                            </Text>

                                    <Image source={require('./kickWrap.jpg')} style={{ height: 300, width: 310, borderRadius: 15, marginLeft: 5, marginTop: 20 }} />
                                </View>
                            </View>

                            <View style={styles.textWithTitle}>
                                <View style={{ alignSelf: 'flex-start', marginBottom: 10, marginLeft: 9 }}>
                                    <Text style={styles.Title}>
                                        <Text style={styles.innerText}> 3. </Text>Body Armour: Shin Guards and Head Guards
                                </Text>
                                    <Text style={styles.introductionText}>
                                        Body armour sounds a little intimidating. But, remember, in kickboxing, you are fighting – and, in fights, people get hurt.
                                        The point in protective guards is to prevent more serious injury than is absolutely necessary.
                                        That’s why protection is usually used for particular pain points: the head and the shins.
                                        Your headgear will protect your temples and forehead, primarily.
                                        For styles like American kickboxing, in which low kicks are forbidden, you will expect kicks to the head – and it’s worth having something there between you and your skull.
                                        Meanwhile, in styles like savate, shinguards are fairly indispensable – as low kicks can go straight to an extremely painful area.


                            </Text>

                                    <Image source={require('./kickShinGuard.jpg')} style={{ height: 250, width: 310, borderRadius: 15, marginLeft: 5, marginTop: 20 }} />
                                </View>
                            </View>

                            <View style={styles.textWithTitle}>
                                <View style={{ alignSelf: 'flex-start', marginBottom: 10, marginLeft: 9 }}>
                                    <Text style={styles.Title}>
                                        <Text style={styles.innerText}> 4. </Text>Clothing
                                </Text>
                                    <Text style={styles.introductionText}>
                                        When kickboxing, the chances are that you are going to get really hot and sweaty. So effective sports clothing is preferable – if not essential.
                                        You want clothes with some breathability – as well as boxing shorts that are not too baggy. Otherwise, they’ll just get in the way, and that’s not something you want.
                                        For beginners, decent sports gear will work well enough.
                            </Text>
                                </View>
                            </View>

                            <View style={styles.textWithTitle}>
                                <View style={{ alignSelf: 'flex-start', marginBottom: 10, marginLeft: 9 }}>
                                    <Text style={styles.Title}>
                                        <Text style={styles.innerText}> 5. </Text>Punch Bags
                                </Text>
                                    <Text style={styles.introductionText}>
                                        Whilst far from essential if you are going to training at the gym, a punching bag of your own is great if you want to bring your kickboxing training into your home.
                                        Whether they hang from the ceiling or they are freestanding, the punch bag is the indispensable piece of gear for your practice.
                                        Whether you are just boxing for your own general fitness or you are training actively towards a bout, a punchbag is the way that you will improve the quickest.
                            </Text>
                                    <Image source={require('./kickBag.jpg')} style={{ height: 250, width: 310, borderRadius: 15, marginLeft: 5, marginTop: 20 }} />
                                </View>
                            </View>

                            <View style={{ backgroundColor: 'black', borderRadius: 15, opacity: 0.8 }}>
                                <Text style={{ paddingLeft: 6, fontSize: 16, color: 'red', marginTop: 10 }}>
                                    You are ALL GEARED UP !! The next step, start with the basics :
                        </Text>
                            </View>

                            <View style={{ marginBottom: 30, alignSelf: 'center', width: 300 }}>
                                <KickButton stepText="Step 3 " text="The basics" onPress={() => navigation.navigate('KickBoxBasics')}/>
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
        borderRadius: 15,
        marginRight: 15
    }

});

export default KickBoxGear;