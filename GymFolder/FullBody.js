import React, { Component, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Modal, Image, ScrollView, SafeAreaView } from 'react-native';
import { TimerClass } from './Timer';
import InputSpinner from "react-native-input-spinner";

export class FullBodyClass extends Component {

    screen = ({ navigation, route }) => {

        const [modalVisible, setModalVisible] = useState(false);
        const [exerciseName, setName] = useState('');

        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#336699' }}>
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
                    <Text style={{ color: 'white', padding: 15, fontSize: 18, textAlign: 'justify' }}>
                        Circuit training is a style of workout where you cycle through several exercises
                        (usually five to 10) targeting different muscle groups with minimal rest in between.
                        The result is a workout that taxes your muscular strength and endurance and your cardiorespiratory system.
                        </Text>
                    <View style={{ flexDirection: 'row' }}>
                        
                        <TimerClass></TimerClass>
                        <Text style={{ color: 'white', fontSize: 17, fontWeight: '600', alignSelf: 'center', alignItems: 'center', paddingLeft: 10, textAlign: 'center', marginBottom: 10 }}>
                            Calories burned: 420kcal {"\n"} 4 sets {"\n"}Rest time: 30s {"\n"}Rest time between circuits:{"\n"}1 minute
                            </Text>
                    </View>
                    <View>
                    <Text  style={{ fontSize: 17, fontWeight: '600',  marginTop: 15,textAlign: 'center',color:'white' }}> Set the number of circuits</Text>
                    <InputSpinner
                        max={5}
                        min={1}
                        step={1}
                        colorMax={"#9fbfdf"}
                        colorMin={"#9fbfdf"}
                        editable={false}
                        buttonStyle={{ borderRadius: 10, backgroundColor: '#9fbfdf' }}
                        rounded={false}
                        style={{ marginTop: 10, width:'70%', marginBottom: 15, borderColor:'white', borderRadius:10 }}
                        textColor='white'
                        fontSize={30}
                        showBorder={true}
                        value={4}
                        onChange={(num) => {
                            console.log(num);
                        }}
                    />
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
                            {this.renderButton(2, 3, setModalVisible, setName, "Knee Push Up")}
                            {this.renderButton(4, 1, setModalVisible, setName, "Wall Crunches")}
                            {this.renderButton(2, 3, setModalVisible, setName, "Glutes Bridge")}
                            {this.renderButton(5, 0, setModalVisible, setName, "Super Man")}
                            {this.renderButton(3, 2, setModalVisible, setName, "Short Crunches")}
                            {this.renderButton(5, 0, setModalVisible, setName, "Single Leg Squat")}
                            {this.renderButton(4, 1, setModalVisible, setName, "Push Up")}
                            {this.renderButton(4, 1, setModalVisible, setName, "Upper Back")}
                            {this.renderButton(4, 1, setModalVisible, setName, "Plank")}


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
                    info = { source: require("./Lowerbody/summo.gif"), text: " 40 reps" };
                    return info;
                }
            case "Knee Push Up":
                {
                    info = { source: require("./Upperbody/kneePush.gif"), text: " 20 reps" };
                    return info;
                }
            case "Single Leg Squat":
                {
                    info = { source: require("./Lowerbody/singleLegSquats.gif"), text: "15 reps/side" };
                    return info;
                }
            case "Wall Crunches":
                {
                    info = { source: require("./Core/wallCrunch.gif"), text: "20 reps" };
                    return info;
                }
            case "Super Man":
                {
                    info = { source: require("./Upperbody/SuperManEx.gif"), text: "1 minute" };
                    return info;
                }
            case "Glutes Bridge":
                {
                    info = { source: require("./Lowerbody/gluteBridgeEx.gif"), text: "40 reps" };
                    return info;
                }
            case "Push Up":
                {
                    info = { source: require("./Upperbody/pushUp.gif"), text: "20 reps" };
                    return info;
                }
            case "Plank":
                {
                    info = { source: require("./Core/plank.gif"), text: "1 minute" };
                    return info;
                }
            case "Short Crunches":
                {
                    info = { source: require("./Core/shortCrunches.gif"), text: "40 reps" };
                    return info;
                }
            case "Upper Back":
                {
                    info = { source: require("./Upperbody/upperBackEx.gif"), text: "20 reps" };
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
                    <Image source={gifSource.source} style={{ height: 180, width: 300, marginBottom: 10, borderRadius: 10, marginTop: '15%' }}></Image>
                    <TouchableOpacity
                        style={{ ...styles.openButton, backgroundColor: "#9fbfdf" }}
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
        backgroundColor: "#9fbfdf",
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
        backgroundColor: '#336699',
        marginLeft: 1
    },
    emptyCircle: {
        width: 10,
        height: 10,
        borderRadius: 10 / 2,
        borderColor: "#336699",
        borderWidth: 1,
        backgroundColor: '#9fbfdf',
        marginLeft: 1
    }
});


export default FullBodyClass;
