import React, { Component, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Modal, Image, ScrollView, SafeAreaView } from 'react-native';
import { TimerClass } from './Timer';
import InputSpinner from "react-native-input-spinner";

export class LowerBodyClass extends Component {

    screen = ({ navigation, route }) => {

        const [modalVisible, setModalVisible] = useState(false);
        const [exerciseName, setName] = useState('');

        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#003399' }}>
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
                    <Image source={require('./Lowerbody/legsMuscles.png')} style={{ height: 250, width: '95%', marginBottom: 10, borderRadius: 10, marginTop: '5%' }}></Image>
                    <View style={{ flexDirection: 'row' }}>

                        <TimerClass></TimerClass>
                        <Text style={{ color: 'white', fontSize: 17, fontWeight: '600', alignSelf: 'center', alignItems: 'center', paddingLeft: 10, textAlign: 'center', marginBottom: 10 }}>
                            Calories burned: 320kcal {"\n"}Rest time: 30s {"\n"}Rest time between sets:{"\n"}1 minute
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

                            {this.renderButton(2, 3, setModalVisible, setName, "Summo Squats")}
                            {this.renderButton(4, 1, setModalVisible, setName, "Jumping Lunges")}
                            {this.renderButton(5, 0, setModalVisible, setName, "Single Leg Squat")}
                            {this.renderButton(4, 1, setModalVisible, setName, "Squat Jacks")}
                            {this.renderButton(3, 2, setModalVisible, setName, "One Leg Lunge")}
                            {this.renderButton(2, 3, setModalVisible, setName, "KickBack Squat")}
                            {this.renderButton(2, 3, setModalVisible, setName, "Glutes Bridge")}
                            {this.renderButton(3, 2, setModalVisible, setName, "One Leg Glute Bridge")}
                            {this.renderButton(4, 1, setModalVisible, setName, "Wall Sit")}

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
            case "Summo Squats":
                {
                    info = { source: require("./Lowerbody/summo.gif"), text: "4 sets -> 40 reps/set" };
                    return info;
                }
            case "Jumping Lunges":
                {
                    info = { source: require("./Lowerbody/jumpingLung.gif"), text: "4 sets -> 1 minute/set" };
                    return info;
                }
            case "Single Leg Squat":
                {
                    info = { source: require("./Lowerbody/singleLegSquats.gif"), text: "4 sets -> 15 reps/side/set" };
                    return info;
                }
            case "Squat Jacks":
                {
                    info = { source: require("./Lowerbody/squatJack.gif"), text: "4 sets -> 30 reps/set" };
                    return info;
                }
            case "One Leg Lunge":
                {
                    info = { source: require("./Lowerbody/oneLegLunges.gif"), text: "4 sets -> 15 reps/side/set" };
                    return info;
                }
            case "KickBack Squat":
                {
                    info = { source: require("./Lowerbody/squatAndGluteEx.gif"), text: "4 sets -> 40 reps/set" };
                    return info;
                }
            case "Glutes Bridge":
                {
                    info = { source: require("./Lowerbody/gluteBridgeEx.gif"), text: "4 sets -> 40 reps/set" };
                    return info;
                }
            case "One Leg Glute Bridge":
                {
                    info = { source: require("./Lowerbody/oneLegGlute.gif"), text: "4 sets -> 20 reps/side/set" };
                    return info;
                }
            case "Wall Sit":
                {
                    info = { source: require("./Lowerbody/wallSitEx.gif"), text: "4 sets -> 1 minute/set" };
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
                    <Text style={{ ...styles.modalText, fontSize: 15, fontWeight: '600', marginTop: 20 }}> Set the number of sets</Text>
                    <InputSpinner
                        max={5}
                        min={1}
                        step={1}
                        colorMax={"#6699ff"}
                        colorMin={"#6699ff"}
                        editable={false}
                        buttonStyle={{ borderRadius: 10, backgroundColor: '#6699ff' }}
                        rounded={false}
                        style={{ marginTop: 10 }}
                        value={4}
                        onChange={(num) => {
                            console.log(num);
                        }}
                    />
                    <Image source={gifSource.source} style={{ height: 190, width: 300, marginBottom: 10, borderRadius: 10, marginTop: '15%' }}></Image>
                    <TouchableOpacity
                        style={{ ...styles.openButton, backgroundColor: "#6699ff" }}
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
        backgroundColor: "#6699ff",
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
        backgroundColor: '#003399',
        marginLeft: 1
    },
    emptyCircle: {
        width: 10,
        height: 10,
        borderRadius: 10 / 2,
        borderColor: "#003399",
        borderWidth: 1,
        backgroundColor: '#6699ff',
        marginLeft: 1
    }
});


export default LowerBodyClass;
