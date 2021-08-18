import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, View, ImageBackground, KeyboardAvoidingView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
class FirstPage extends Component {
    constructor(props) {
        super();
        this.state = {
            name: null,
            age: null,
            height: null,
            weight: null
        };
    }

    screen = ({ navigation }) => {
        return (
            <ImageBackground source={require('./fitnessApp.png')} style={styles.container} >
                <View style={styles.inputsView}>
                <KeyboardAvoidingView behavior={Platform.OS =='ios'? "padding":"height"} keyboardVerticalOffset={Platform.OS == 'ios'? '80' : '10'}>
                    <View style={{ width: '60%' }}>
                        <Input
                            keyboardType='default'
                            returnKeyType="done"
                            placeholder=' Name'
                            placeholderTextColor="white"
                            onChangeText={(val) => this.state.name = val}
                            color='white'
                            leftIcon={{ type: 'font-awesome', name: 'user-circle', color: 'white' }}
                        />

                        <Input
                            keyboardType='numeric'
                            returnKeyType="done"
                            placeholder=' Age'
                            placeholderTextColor="white"
                            onChangeText={(val) => this.state.age = val}
                            color='white'
                            leftIcon={{ type: 'font-awesome', name: 'calendar-o', color: 'white' }} />

                        <Input
                            keyboardType='numeric'
                            returnKeyType="done"
                            placeholder=' Height (cm)'
                            placeholderTextColor="white"
                            onChangeText={(val) => this.state.height = val}
                            color='white'
                            leftIcon={{ type: 'font-awesome', name: 'hand-o-up', color: 'white' }} />
                        <Input
                            keyboardType='numeric'
                            returnKeyType="done"
                            placeholder=' Weight (kg)'
                            placeholderTextColor="white"
                            onChangeText={(val) => this.state.weight = val}
                            color='white'
                            leftIcon={{ type: 'font-awesome', name: 'leaf', color: 'white' }} />
                    </View>
                    </KeyboardAvoidingView>
                    <TouchableOpacity style={{ alignSelf: 'flex-end', marginRight:'10%', marginBottom:'7%' }} onPress={() => navigation.navigate("Let's get started!", { name: this.state.name, age: this.state.age, height: this.state.height, weight: this.state.weight })}>
                        <Icon name="arrow-right" size={30} color="white" />
                    </TouchableOpacity>
                </View>
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
    inputsView: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'flex-end',
        alignSelf: 'flex-start'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    buttonContainer: {
        marginBottom: 30
    },
    buttonStyle: {
        fontSize: 30,
        color: '#6c63fe'
    }
});

export default FirstPage;
