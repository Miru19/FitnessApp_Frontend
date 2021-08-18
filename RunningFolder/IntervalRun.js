import React, { Component } from "react";
import { StyleSheet, ImageBackground, View, ScrollView, Text } from 'react-native';
import { Video } from 'expo-av';

export class IntervalRun extends Component {

    screen = ({ navigation, route }) => {
        return (
            <ImageBackground source={require('./RunningPhoto.jpg')} style = {styles.container}>
                 <ScrollView showsVerticalScrollIndicator ={false} showsHorizontalScrollIndicator={false}>
                     <View style={styles.arrangeText}>
                        <Text style={styles.titelText}>Interval Workouts</Text>
                        <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: 12, marginBottom: 10, marginTop: 5, marginLeft: 20, width: 300}}>
                            <Text style={styles.weekText}>Week 1:</Text>
                            <Text style={styles.workoutText}><Text style={styles.numberText}>2.9km: </Text></Text>
                            <Text style={styles.training}>1km - Warm up</Text>
                            <Text style={styles.training}>0.9km - 3X100m with 200m walk between them</Text>
                            <Text style={styles.training}>1km - Cooldown </Text>
                        </View>
                        <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: 12, marginBottom: 10, marginTop: 5, marginLeft: 20, width: 300}}>
                            <Text style={styles.weekText}>Week 2:</Text>
                            <Text style={styles.workoutText}><Text style={styles.numberText}>3.8km: </Text></Text>
                            <Text style={styles.training}>1km - Warm up</Text>
                            <Text style={styles.training}>0.9km - 3X100m with 200m walk between them</Text>
                            <Text style={styles.training}>0.9km - 3X200m with 100m walk between them</Text>
                            <Text style={styles.training}>1km - Cooldown</Text>
                        </View>
                        <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: 12, marginBottom: 10, marginTop: 5, marginLeft: 20, width: 300}}>
                            <Text style={styles.weekText}>Week 3:</Text>
                            <Text style={styles.workoutText}><Text style={styles.numberText}>3.8km: </Text></Text>
                            <Text style={styles.training}>1km - Warm up</Text>
                            <Text style={styles.training}>2km - 6X200m with 100m walk between them</Text>
                            <Text style={styles.training}>1km - Cooldown</Text>
                        </View>
                        <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: 12, marginBottom: 10, marginTop: 5, marginLeft: 20, width: 300}}>
                            <Text style={styles.weekText}>Week 4:</Text>
                            <Text style={styles.workoutText}><Text style={styles.numberText}>5km: </Text></Text>
                            <Text style={styles.training}>3km - Warm up</Text>
                            <Text style={styles.training}>1km - 10X50m with 50m walk between them</Text>
                            <Text style={styles.training}>1km - Cooldown</Text>
                        </View>
                        <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: 12, marginBottom: 10, marginTop: 5, marginLeft: 20, width: 300}}>
                            <Text style={styles.weekText}>Week 5:</Text>
                            <Text style={styles.workoutText}><Text style={styles.numberText}>5.1km: </Text></Text>
                            <Text style={styles.training}>2km - Warm up</Text>
                            <Text style={styles.training}>0.3km - 3X50m with 50m walk between them</Text>
                            <Text style={styles.training}>0.6km - 3X100m with 100m walk between them</Text>
                            <Text style={styles.training}>1.2km - 3X200m with 200m walk between them</Text>
                            <Text style={styles.training}>1km - Cooldown</Text>
                        </View>
                        <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: 12, marginBottom: 10, marginTop: 5, marginLeft: 20, width: 300}}>
                            <Text style={styles.weekText}>Week 6:</Text>
                            <Text style={styles.workoutText}><Text style={styles.numberText}>6km: </Text></Text>
                            <Text style={styles.training}>1.5km - Warm up</Text>
                            <Text style={styles.training}>0.5km - 5X50m with 50m walk between them</Text>
                            <Text style={styles.training}>1km - 5X100m with 100m walk between them</Text>
                            <Text style={styles.training}>2km - 5X200m with 200m walk between them</Text>
                            <Text style={styles.training}>1km - Cooldown</Text>
                        </View>
                        <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: 12, marginBottom: 10, marginTop: 5, marginLeft: 20, width: 300}}>
                            <Text style={styles.weekText}>Week 7:</Text>
                            <Text style={styles.workoutText}><Text style={styles.numberText}>5.2km: </Text></Text>
                            <Text style={styles.training}>1km - Warm up</Text>
                            <Text style={styles.training}>2.4km - 4X400m with 200m walk between them</Text>
                            <Text style={styles.training}>0.8km - 1X800m with 400m walk</Text>
                            <Text style={styles.training}>1km - Cooldown</Text>
                        </View>
                        <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: 12, marginBottom: 10, marginTop: 5, marginLeft: 20, width: 300}}>
                            <Text style={styles.weekText}>Week 8:</Text>
                            <Text style={styles.workoutText}><Text style={styles.numberText}>7.4km: </Text></Text>
                            <Text style={styles.training}>1km - Warm up</Text>
                            <Text style={styles.training}>1.8km - 3X400m with 200m walk between them</Text>
                            <Text style={styles.training}>3.6km - 3X800m with 400m walk between them</Text>
                            <Text style={styles.training}>1km - Cooldown</Text>
                        </View>
                        <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.0)', borderRadius: 12, marginBottom: 10, marginTop: 5, marginLeft: 20, width: 250}}>
                            <View style={styles.videoAligment}>
                                <Video
                                    source={ require ('./IntervalRunningVideo.mp4') }
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
        marginLeft: 25,
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
        marginLeft: 15,
        fontSize: 14,
        color: 'black'
    },

    training: {
        marginLeft: 27
    },
    
    numberText: {
        fontWeight: 'bold',
        fontSize: 15
    },

    videoAligment: {
        marginLeft: 26
    }
});

export default IntervalRun;