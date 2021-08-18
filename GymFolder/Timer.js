import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';

export class TimerClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timerStart: false,
            stopwatchStart: false,
            totalDuration: 90000,
            timerReset: false,
            stopwatchReset: false,
        };
        this.toggleTimer = this.toggleTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.toggleStopwatch = this.toggleStopwatch.bind(this);
        this.resetStopwatch = this.resetStopwatch.bind(this);
    }

    toggleTimer() {
        this.setState({ timerStart: !this.state.timerStart, timerReset: false });
    }

    resetTimer() {
        this.setState({ timerStart: false, timerReset: true });
    }

    toggleStopwatch() {
        this.setState({ stopwatchStart: !this.state.stopwatchStart, stopwatchReset: false });
    }

    resetStopwatch() {
        this.setState({ stopwatchStart: false, stopwatchReset: true });
    }

    getFormattedTime(time) {
        this.currentTime = time;
    };

    render() {
        return (
            <View style={{
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Stopwatch laps start={this.state.stopwatchStart}
                    reset={this.state.stopwatchReset}
                    options={options}
                    getTime={this.getFormattedTime} />
                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                    <TouchableHighlight onPress={this.toggleStopwatch}>
                        <Text style={{ fontSize: 20, fontWeight: '600', color: 'white' }}>{!this.state.stopwatchStart ? "Start" : "Stop"}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={this.resetStopwatch}>
                        <Text style={{ fontSize: 20, fontWeight: '600', color: 'white' }}>      Reset</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const handleTimerComplete = () => alert("custom completion function");

const options = {
    container: {
        backgroundColor: '#717575',
        padding: 5,
        borderRadius: 5,
        width: 140,
    },
    text: {
        fontSize: 30,
        color: '#FFF',
        marginLeft: 7,
    }
};

export default TimerClass;