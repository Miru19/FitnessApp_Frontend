import React, { Component } from "react";
import { StyleSheet, ImageBackground, View, ScrollView, Text } from 'react-native';
import { Video } from 'expo-av';

export class TempoRun extends Component {

    screen = ({ navigation, route }) => {
        return (
            <ImageBackground source={require('./RunningPhoto.jpg')} style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                    <View style={styles.arrangeText}>
                        <Text style={styles.titelText}>Tempo Workouts</Text>
                        <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: 12, marginBottom: 10, marginTop: 5, marginLeft: 20, width: 300 }}>
                            <Text style={styles.weekText}>Week 1:</Text>
                            <Text style={styles.workoutText}><Text style={styles.numberText}>3km: </Text></Text>
                            <Text style={styles.training}>1km - Warm up</Text>
                            <Text style={styles.training}>1km - 30 seconds faster per km than the one from easy running</Text>
                            <Text style={styles.training}>1km - Cooldown</Text>
                        </View>
                        <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: 12, marginBottom: 10, marginTop: 5, marginLeft: 20, width: 300 }}>
                            <Text style={styles.weekText}>Week 2:</Text>
                            <Text style={styles.workoutText}><Text style={styles.numberText}>4km: </Text></Text>
                            <Text style={styles.training}>1km - Warm up</Text>
                            <Text style={styles.training}>2km - 30 seconds faster per km than the ones from easy running</Text>
                            <Text style={styles.training}>1km - Cooldown</Text>
                        </View>
                        <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: 12, marginBottom: 10, marginTop: 5, marginLeft: 20, width: 300 }}>
                            <Text style={styles.weekText}>Week 3:</Text>
                            <Text style={styles.workoutText}><Text style={styles.numberText}>5km: </Text></Text>
                            <Text style={styles.training}>2km - Warm up</Text>
                            <Text style={styles.training}>2km - 30-45 seconds faster per km than the ones from easy running</Text>
                            <Text style={styles.training}>1km - Cooldown</Text>
                        </View>
                        <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: 12, marginBottom: 10, marginTop: 5, marginLeft: 20, width: 300 }}>
                            <Text style={styles.weekText}>Week 4:</Text>
                            <Text style={styles.workoutText}><Text style={styles.numberText}>6km: </Text></Text>
                            <Text style={styles.training}>2km - Warm up</Text>
                            <Text style={styles.training}>2km - 30-45 seconds faster per km than the ones from easy running</Text>
                            <Text style={styles.training}>2km - Cooldown</Text>
                        </View>
                        <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: 12, marginBottom: 10, marginTop: 5, marginLeft: 20, width: 300 }}>
                            <Text style={styles.weekText}>Week 5:</Text>
                            <Text style={styles.workoutText}><Text style={styles.numberText}>6km: </Text></Text>
                            <Text style={styles.training}>2km - Warm up</Text>
                            <Text style={styles.training}>3km - 30-45 seconds faster per km than the ones from easy running</Text>
                            <Text style={styles.training}>1km - Cooldown</Text>
                        </View>
                        <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: 12, marginBottom: 10, marginTop: 5, marginLeft: 20, width: 300 }}>
                            <Text style={styles.weekText}>Week 6:</Text>
                            <Text style={styles.workoutText}><Text style={styles.numberText}>8km: </Text></Text>
                            <Text style={styles.training}>3km - Warm up</Text>
                            <Text style={styles.training}>2km - 45 seconds faster per km than the ones from easy running</Text>
                            <Text style={styles.training}>3km - Cooldown</Text>
                        </View>
                        <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: 12, marginBottom: 10, marginTop: 5, marginLeft: 20, width: 300 }}>
                            <Text style={styles.weekText}>Week 7:</Text>
                            <Text style={styles.workoutText}><Text style={styles.numberText}>9km: </Text></Text>
                            <Text style={styles.training}>3km - Warm up</Text>
                            <Text style={styles.training}>3km - 45 seconds faster per km than the ones from easy running</Text>
                            <Text style={styles.training}>3km - Cooldown</Text>
                        </View>
                        <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: 12, marginBottom: 10, marginTop: 5, marginLeft: 20, width: 300 }}>
                            <Text style={styles.weekText}>Week 8:</Text>
                            <Text style={styles.workoutText}><Text style={styles.numberText}>10km: </Text></Text>
                            <Text style={styles.training}>3km - Warm up</Text>
                            <Text style={styles.training}>4km - 45-60 seconds faster per km than the ones from easy running</Text>
                            <Text style={styles.training}>3km - Cooldown</Text>
                        </View>
                        <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.0)', borderRadius: 12, marginBottom: 10, marginTop: 5, marginLeft: 20, width: 250}}>
                            <View style={styles.videoAligment}>
                                <Video
                                    source={ require ('./TempoRunningVideo.mp4') }
                                    rate={1.0}
                                    volume={1.0}
                                    isMuted={false}
                                    resizeMode="contain"
                                    shouldPlay="true"
                                    isLooping="false"
                                    useNativeControls={true}
                                    style={{ width: 250, height: 150, borderRadius: 5 }}
                                />
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
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        resizeMode: 'cover',
        flexDirection: 'column',
    },

    arrangeText: {
        marginTop: 35
    },

    titelText: {
        paddingLeft: 5,
        marginBottom: 10,
        marginLeft: 40,
        fontSize: 40,
        fontWeight: "bold",
        color: 'black'
    },

    weekText: {
        paddingLeft: 5,
        fontSize: 22,
        color: 'black',
        fontWeight: "bold",
        fontStyle: 'italic'
    },

    workoutText: {
        paddingLeft: 5,
        marginLeft: 10,
        fontSize: 14,
        color: 'black'
    },

    training: {
        marginLeft: 23
    },

    numberText: {
        fontWeight: 'bold',
        fontSize: 15
    },

    videoAligment: {
        marginLeft: 26
    }
});

export default TempoRun;