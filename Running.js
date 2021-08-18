import React, { Component } from "react";
import { StyleSheet, Text, View, ImageBackground, Alert } from 'react-native';
import  EasyButton  from './RunningFolder/EasyButton';
import  TempoButton  from './RunningFolder/TempoButton';
import  IntervalsButton  from './RunningFolder/IntervalsButton';
import  RunningTechniqueButton from './RunningFolder/RunningTechniqueButton';


export class RunningClass extends Component {

    screen = ({ navigation, route }) => {
        return ( 
            <ImageBackground source={require('./RunningFolder/RunningPhoto.jpg')} style={styles.container}>
                <View style={styles.arrangeText}>
                    <View>
                        <Text style={styles.congratulationText}>Congratulations!</Text>
                        <Text style={styles.titleToInstructions}>A very good choice, you've just done your first step to a healthier life.</Text>
                        <Text style={styles.instructionsText}>One of the first things you need to know when it comes to running workouts is that they are divided in 3 big categories: <Text style={styles.easyText}>Easy</Text>, <Text style={styles.tempoText}>Tempo</Text> and <Text style={styles.intervalText}>Interval</Text> </Text>
                        <Text style={styles.instructionsText}>Therefore, in order to achieve your goal you'll need to run at least <Text style={styles.numberText}>3</Text> times a week.</Text>
                        <Text style={styles.instructionsText}>The order is rather simple, a harder training will always be followed by an easy one. </Text> 
                        <Text style={styles.instructionsText}>We recommend you to learn the techniques of running and then start with the <Text style={styles.tempoText}>Tempo</Text>, followed by <Text style={styles.easyText}>Easy</Text> and eventually <Text style={styles.intervalText}>Interval </Text>with a rest day between them.</Text>
                    </View>

                    <View>
                        <Text style={styles.selectWorkoutText}>Select workout: </Text>
                        <EasyButton text='Easy' onPress={()=> navigation.navigate('EasyRun')}/>
                        <TempoButton text='Tempo' onPress={()=> navigation.navigate('TempoRun')}/>
                        <IntervalsButton text='Interval' onPress={()=> navigation.navigate('IntervalRun')}/>
                        <RunningTechniqueButton text='Running Technique' onPress={()=> navigation.navigate('RunningTechnique')}/>
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
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        resizeMode: 'cover',
        flexDirection: 'column',
    },

    titleToInstructions: {
        marginTop: 20,
        paddingLeft: 5,
        fontSize: 14,
        color: 'black'
    },

    congratulationText: {
        paddingLeft: 5,
        fontSize: 32,
        fontWeight: "bold",
        color: 'black'
    },

    instructionsText: {
        paddingLeft: 5,
        fontSize: 14,
        color: 'black'
    },

    selectWorkoutText: {
        marginTop: 20,
        paddingLeft: 5,
        fontSize: 23,
        fontWeight: "bold",
        fontStyle: 'italic',
        color: 'black'
    },

    easyText: {
        color: '#00cc00',
        fontSize: 15
    },

    tempoText: {
        color: '#0000ff',
        fontSize: 15
    },

    intervalText: {
        color: '#ff0000',
        fontSize: 15
    },

    numberText: {
        fontWeight: 'bold',
        fontSize: 15
    },

    arrangeText: {
        marginTop: 35
    }
})


export default RunningClass;
