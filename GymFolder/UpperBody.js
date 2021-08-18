import React, { Component, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Modal, Image, ScrollView, SafeAreaView } from 'react-native';
import { TimerClass } from './Timer';
import InputSpinner from "react-native-input-spinner";

export class UpperBodyClass extends Component {

    screen = ({ navigation, route }) => {

        const [modalVisible, setModalVisible] = useState(false);
        const [exerciseName, setName] = useState('');

        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#602040' }}>
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
                    <Image source={require('./Upperbody/upperMuscles.jpg')} style={{ height: 250, width: '95%', marginBottom: 10, borderRadius: 10, marginTop: '5%' }}></Image>
                    <View style={{ flexDirection: 'row' }}>

                        <TimerClass></TimerClass>
                        <Text style={{ color: 'white', fontSize: 17, fontWeight: '600', alignSelf: 'center', alignItems: 'center', paddingLeft: 10, textAlign:'center', marginBottom:10 }}>
                            Calories burned: 280kcal {"\n"}Rest time: 30s {"\n"}Rest time between sets:{"\n"}1 minute
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

                            {this.renderButton(2, 3, setModalVisible, setName, "Knee Push Up")}
                            {this.renderButton(4, 1, setModalVisible, setName, "Push Up")}
                            {this.renderButton(4, 1, setModalVisible, setName, "Pike Push Up")}
                            {this.renderButton(5, 0, setModalVisible, setName, "Asymmetrical Push Up")}
                            {this.renderButton(5, 0, setModalVisible, setName, "Ankle Tap Push Up")}
                            {this.renderButton(3, 2, setModalVisible, setName, "Lower Back")}
                            {this.renderButton(2, 3, setModalVisible, setName, "Triceps Dips")}
                            {this.renderButton(3, 2, setModalVisible, setName, "Single Leg Dips")}
                            {this.renderButton(5, 0, setModalVisible, setName, "Super Man")}
                            {this.renderButton(4, 1, setModalVisible, setName, "Upper Back")}

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
            case "Knee Push Up":
                {
                    info = { source: require("./Upperbody/kneePush.gif"), text: "3 sets -> 20 reps/set" };
                    return info;
                }
            case "Push Up":
                {
                    info = { source: require("./Upperbody/pushUp.gif"), text: "3 sets -> 20 reps/set" };
                    return info;
                }
            case "Pike Push Up":
                {
                    info = { source: require("./Upperbody/pikePush.gif"), text: "3 sets -> 20 reps/set" };
                    return info;
                }
            case "Asymmetrical Push Up":
                {
                    info = { source: require("./Upperbody/asymmetricalPush.gif"), text: "3 sets -> 10 reps/side/set" };
                    return info;
                }
            case "Ankle Tap Push Up":
                {
                    info = { source: require("./Upperbody/ankleTapPush.gif"), text: "3 sets -> 20 reps/set" };
                    return info;
                }
            case "Lower Back":
                {
                    info = { source: require("./Upperbody/lower.gif"), text: "3 sets -> 20 reps/set" };
                    return info;
                }
            case "Triceps Dips":
                {
                    info = { source: require("./Upperbody/dips.gif"), text: "3 sets -> 20 reps/set" };
                    return info;
                }
            case "Single Leg Dips":
                {
                    info = { source: require("./Upperbody/singleLegDip.gif"), text: "3 sets -> 10 reps/side/set" };
                    return info;
                }
            case "Super Man":
                {
                    info = { source: require("./Upperbody/SuperManEx.gif"), text: "3 sets -> 1 minute/set" };
                    return info;
                }
            case "Upper Back":
                {
                    info = { source: require("./Upperbody/upperBackEx.gif"), text: "3 sets -> 20 reps/set" };
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
                        colorMax={"#b1b4b4"}
                        colorMin={"#b1b4b4"}
                        editable={false}
                        buttonStyle={{ borderRadius: 10, backgroundColor:'#b1b4b4' }}
                        rounded={false}
                        style={{ marginTop: 10}}
                        value={3}
                        onChange={(num) => {
                            console.log(num);
                        }}
                    />
                    <Image source={gifSource.source} style={{ height: 180, width: 300, marginBottom: 10, borderRadius: 10, marginTop: '15%' }}></Image>
                    <TouchableOpacity
                        style={{ ...styles.openButton, backgroundColor: "#b1b4b4" }}
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
        backgroundColor: "#b1b4b4",
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
        backgroundColor: '#602040',
        marginLeft: 1
    },
    emptyCircle: {
        width: 10,
        height: 10,
        borderRadius: 10 / 2,
        borderColor: "#602040",
        borderWidth: 1,
        backgroundColor: '#b1b4b4',
        marginLeft: 1
    }
});


export default UpperBodyClass;
