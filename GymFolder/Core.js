import React, { Component, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Modal, Image, ScrollView, SafeAreaView } from 'react-native';
import { TimerClass } from './Timer'
import InputSpinner from "react-native-input-spinner";

export class CoreClass extends Component {

    screen = ({ navigation, route }) => {

        const [modalVisible, setModalVisible] = useState(false);
        const [exerciseName, setName] = useState('');

        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#47476b' }}>
                <View style={styles.centeredView} >
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                        }}
                    >
                        {this.renderModalContent(modalVisible, setModalVisible, exerciseName)}
                    </Modal>
                    <Image source={require('./Core/coreMuscles.jpg')} style={{ height: 250, width: '95%', marginBottom: 10, borderRadius: 10, marginTop: '5%' }}></Image>
                    <View style={{ flexDirection: 'row' }}>

                        <TimerClass></TimerClass>
                        <Text style={{ color: 'white', fontSize: 17, fontWeight: '600', alignSelf: 'center', alignItems: 'center', paddingLeft: 10, textAlign: 'center', marginBottom: 10 }}>
                            Calories burned: 270kcal {"\n"}Rest time: 30s {"\n"}Rest time between sets:{"\n"}1 minute
                            </Text>
                    </View>
                    <ScrollView style={{
                        width: '100%', elevation: 2, flex: 1,
                    }}>
                        <View style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                        }}>

                            {this.renderButton(2, 3, setModalVisible, setName, "Reverse Crunches")}
                            {this.renderButton(3, 2, setModalVisible, setName, "Knee Crunches")}
                            {this.renderButton(3, 2, setModalVisible, setName, "Side Crunches")}
                            {this.renderButton(4, 1, setModalVisible, setName, "Wall Crunches")}
                            {this.renderButton(3, 2, setModalVisible, setName, "Bycicle")}
                            {this.renderButton(2, 3, setModalVisible, setName, "Scissors Kicks")}
                            {this.renderButton(4, 1, setModalVisible, setName, "Plank")}
                            {this.renderButton(3, 2, setModalVisible, setName, "Toe Touch")}
                            {this.renderButton(3, 2, setModalVisible, setName, "Short Crunches")}

                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );


    }


    renderButton(fullCircles, emptyCircles, setModalVisible, setName, name) {
        let full = [];
        for (let index = 0; index < fullCircles; index++) {
            full.push(<View style={styles.circle}></View>);
        }
        let empty = [];
        for (let index = 0; index < emptyCircles; index++) {
            empty.push(<View style={styles.emptyCircle}></View>)
        }
        return (
            <TouchableOpacity style={styles.openButton} onPress={() => { setModalVisible(true); setName(name) }} >
                <Text style={styles.textStyle}>{name}</Text>
                <Text style={[styles.textStyle, { fontSize: 12 }]}>Difficulty</Text>
                <View style={{ flexDirection: 'row' }}>
                    {full}
                    {empty}
                </View>
            </TouchableOpacity>
        );

    }

    getSource(exerciseName) {
        let info
        switch (exerciseName) {
            case "Reverse Crunches":
                {
                    info = { source: require("./Core/reverseCrunches.gif"), text: "20 reps/set" };
                    return info;
                }
            case "Knee Crunches":
                {
                    info = { source: require("./Core/vsit.gif"), text: "20 reps/set" };
                    return info;
                }
            case "Side Crunches":
                {
                    info = { source: require("./Core/sideCrunch.gif"), text: "10 reps/side/set" };
                    return info;
                }
            case "Wall Crunches":
                {
                    info = { source: require("./Core/wallCrunch.gif"), text: "20 reps/set" };
                    return info;
                }
            case "Bycicle":
                {
                    info = { source: require("./Core/bycicle.gif"), text: "20 reps/set" };
                    return info;
                }
            case "Scissors Kicks":
                {
                    info = { source: require("./Core/scissorKicks.gif"), text: "20 reps/set" };
                    return info;
                }
            case "Plank":
                {
                    info = { source: require("./Core/plank.gif"), text: "1 minute/set" };
                    return info;
                }
            case "Toe Touch":
                {
                    info = { source: require("./Core/toeTouch.gif"), text: "20 reps/set" };
                    return info;
                }
            case "Short Crunches":
                {
                    info = { source: require("./Core/shortCrunches.gif"), text: "40 reps/set" };
                    return info;
                }
            default:
                {
                    info = { source: require("./Core/plank.gif"), text: "" };
                    return info;
                }

        }
    }

    renderModalContent(modalVisible, setModalVisible, exerciseName) {
        const gifSource = this.getSource(exerciseName);
        return (
            <View style={{ ...styles.centeredView }}>
                <View style={styles.modalView}>
                    <Text style={{ ...styles.modalText, fontSize: 20, fontWeight: 'bold' }}>{exerciseName}</Text>
                    <Text>{gifSource.text}</Text>
                    <Text  style={{ ...styles.modalText, fontSize: 15, fontWeight: '600',  marginTop: 20 }}> Set the number of sets</Text>
                    <InputSpinner
                        max={5}
                        min={1}
                        step={1}
                        colorMax={"#a5a5b5"}
                        colorMin={"#a5a5b5"}
                        editable={false}
                        buttonStyle={{ borderRadius: 10, backgroundColor:'#a5a5b5' }}
                        rounded={false}
                        style={{ marginTop: 10}}
                        value={3}
                        onChange={(num) => {
                            console.log(num);
                        }}
                    />
                    <Image source={gifSource.source} style={{ height: 180, width: 300, marginBottom: 10, borderRadius: 10, marginTop: '15%' }}></Image>
                    <TouchableOpacity
                        style={{ ...styles.openButton, backgroundColor: "#a5a5b5" }}
                        onPress={() => { setModalVisible(!modalVisible); }}
                    >
                        <Text style={styles.textStyle}>Finish!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#a5a5b5",
        padding: 10,
        elevation: 2,
        marginBottom: 10,
        width: '90%',
        borderRadius: 10

    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        marginBottom: 3,
        fontSize: 17
    },

    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },

    circle: {
        width: 10,
        height: 10,
        borderRadius: 10 / 2,
        backgroundColor: '#47476b',
        marginLeft: 1
    },
    emptyCircle: {
        width: 10,
        height: 10,
        borderRadius: 10 / 2,
        borderColor: "#47476b",
        borderWidth: 1,
        backgroundColor: '#a5a5b5',
        marginLeft: 1
    }
});


export default CoreClass;
