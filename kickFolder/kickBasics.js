import React, { Component } from "react";
import { StyleSheet, ImageBackground, View, Text, Image } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import KickButton from './KickButton';
import { Video } from 'expo-av';
// import Video from 'react-native-video';

export class KickBoxGear extends Component {

    screen = ({ navigation, route }) => {
        return (
            <ImageBackground source={require('./kickInfo.jpg')} style={styles.container}>
                <ScrollView>
                    <View indicatorStyle='white' style={{ flexDirection: 'column', flex: 1, alignItems: 'flex-start' }}>
                        <View style={{ alignSelf: 'flex-start', marginBottom: 30, marginTop: 70, marginLeft: 9 }}>
                            <Text style={styles.baseText}>
                                The
                        <Text style={styles.innerText}> Basics</Text>
                            </Text>

                            <View style={{ alignSelf: 'flex-start', marginBottom: 10, marginLeft: 9, marginTop: 10 }}>
                                <View style={{ backgroundColor: 'black' }}>
                                    <Text style={styles.Title}>
                                        The 3
                                        <Text style={styles.innerText}> core elements of kickboxing </Text>
                                    </Text>
                                </View>
                            </View>


                            <View style={styles.textWithTitle}>
                                <View style={{ alignSelf: 'flex-start', marginBottom: 10, marginLeft: 9 }}>
                                    <Text style={styles.Title}>
                                        <Text style={styles.innerText}> 1. </Text>The first core element of Kickboxing is BOXING.
                                </Text>
                                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                        <View style={{ width: 150 }}>
                                            <Text style={styles.introductionText}>
                                                This is where you are turning your fists and your forearms into weapons and shields.
                                                Thus, you are using your fists to generate force and impact in order to create injury to your opponent.
                                                Boxing is exceptionally natural. It should feel intuitive to strike with your hands.
                                    </Text>
                                        </View>
                                        <View style={{ width: 170, height: 180, marginTop: 5, borderRadius: 10, overflow: 'hidden' }}>
                                            <Image source={require('./kickCoreElem1.gif')} style={{ width: 170, height: 180, borderRadius: 10 }} />
                                        </View>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.textWithTitle}>
                                <View style={{ alignSelf: 'flex-start', marginBottom: 10, marginLeft: 9 }}>
                                    <Text style={styles.Title}>
                                        <Text style={styles.innerText}> 2. </Text> KICKING – the 2nd core element in Kickboxing.
                                    </Text>
                                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                        <ScrollView style={{ width: 150, height: 180 }} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                                            <Text style={styles.introductionText}>
                                                Kicking is where you are using your feet and your shins as spears and swords.
                                                Common kicks are Foot Jabs, Side Kicks, Hook Kicks and Heel Hook Kicks. Note that the fighting stance is different for Kicking than for Boxing.
                                                For Kicking, your fighting stance will have you leaning back more so you can reach and extend with your legs.
                                                This is in opposition to the fighting stance for Boxing where you’ll be leaning forward more so you’ll have more power for your punches
                                    </Text>
                                        </ScrollView>
                                        <View style={{ width: 170, height: 180, borderRadius: 10, overflow: 'hidden' }}>
                                            <Image source={require('./kickCoreElem2.gif')} style={{ width: 170, height: 180, borderRadius: 10, marginRight: 10 }} />
                                        </View>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.textWithTitle}>
                                <View style={{ alignSelf: 'flex-start', marginBottom: 10, marginLeft: 9 }}>
                                    <Text style={styles.Title}>
                                        <Text style={styles.innerText}> 3. </Text>Combining your KICKS and PUNCHES
                                    </Text>
                                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                        <ScrollView style={{ width: 150, height: 180 }} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                                            <Text style={styles.introductionText}>
                                                The third and final aspect of Kickboxing is combining your kicks with your punches in a smooth, eloquent manner so that your punches set up your kicks and your kicks set up your punches.
                                                Most people who attempt Kickboxing will strike only with their fists, move around a bit and then strike only with their feet.
                                                They’re kicking and then they are boxing – they’re not Kickboxing.
                                                It takes time and patience to master the ability to combine your kicks with your punches in a fluid, seamless manner.
                                                Stick with it and you’ll be kicking and punching like Chuck Norris in no time!
                                    </Text>
                                        </ScrollView>
                                        <View style={{ width: 170, height: 180, borderRadius: 10, overflow: 'hidden' }}>
                                            <Image source={require('./kickCoreElem3.gif')} style={{ width: 170, height: 180, borderRadius: 10, marginRight: 10 }} />
                                        </View>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.textWithTitle}>
                                <View style={{ alignSelf: 'flex-start', marginBottom: 10, marginLeft: 9 }}>
                                    <Text style={styles.Title}>
                                        <Text style={styles.innerText}>The 6 core </Text>punches In Boxing
                                </Text>
                                    <Text style={styles.introductionText}>
                                        Whilst far from essential if you are going to training at the gym, a punching bag of your own is great if you want to bring your kickboxing training into your home.
                                        Whether they hang from the ceiling or they are freestanding, the punch bag is the indispensable piece of gear for your practice.
                                        Whether you are just boxing for your own general fitness or you are training actively towards a bout, a punchbag is the way that you will improve the quickest.
                            </Text>
                                    <View style={{ marginTop: 15 }}>
                                        <Video source={require('./kickBoxingVideo1.mov')}
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
                                        <Text style={styles.innerText}>The 4 </Text>Basic Kicks For Kickboxing
                                </Text>
                                    <Text style={styles.introductionText}>
                                        This video 📺 summarizes the 4 basic Kicks for Kickboxing🥊.
                                     </Text>
                                    <View style={{ marginTop: 15 }}>
                                        <Video source={require('./kickBoxingVideo2.mp4')}
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
                                    Now that we went through the basics, let's start with some trainings. Put on your gloves, and let's go !
                        </Text>
                            </View>

                            <View style={{ marginBottom: 30, alignSelf: 'center', width: 300 }}>
                                <KickButton stepText="Step 4 " text="Trainings" onPress={() => navigation.navigate('KickBoxTrainings')} />
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

export default KickBoxGear;