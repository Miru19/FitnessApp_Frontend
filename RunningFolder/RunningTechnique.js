import React, { Component } from "react";
import { StyleSheet, ImageBackground, View, ScrollView, Text } from 'react-native';
import { Video } from 'expo-av';

export class RunningTechnique extends Component {

    screen = ({ navigation, route }) => {
        return (
            <ImageBackground source={require('./RunningPhoto.jpg')} style = {styles.container}>
                 <ScrollView showsVerticalScrollIndicator ={false} showsHorizontalScrollIndicator={false}>
                     <View style={styles.arrangeText}>
                        <Text style={styles.titelText}>Running Technique</Text>
                        <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: 12, marginBottom: 10, marginTop: 5, marginLeft: 20, width: 300}}>
                            <Text style={styles.weekText}>Why is important?</Text>
                            <Text style={styles.training}>The most obvious reason would be your health. No one wants to get injured because of an improper running form.</Text>
                            <Text style={styles.training}>It is a well known missconception about running and that is: <Text style={styles.quoteText}>What technique? Running is one of the most basic things in the world.</Text></Text>
                            <Text style={styles.training}>Or <Text style={styles.quoteText}>Why should I pay attention to the technique when even a 3 year old can run.</Text></Text>
                            <Text style={styles.training}>Well, I want to inform you that a 3 year old has a better technique than most of the runners.</Text>
                            <Text style={styles.training}>You may be wondering why is that so; It's quite easy, running is something that comes natural to us, humans, but because of our busy lives in which we are mostly sitting all day long and because of the shoes we are wearing, our running form has to suffer.</Text>
                        </View>
                        <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: 12, marginBottom: 10, marginTop: 5, marginLeft: 20, width: 300}}>
                            <Text style={styles.weekText}>What to do in this case?</Text>
                            <Text style={styles.training}>Try to do sport whenever you can. For example don't use the elevator anymore, use the stairs instead.</Text>
                            <Text style={styles.training}>Or, if it's possible, try to commute to work with your bike.</Text>
                            <Text style={styles.training}>Long story short, you need to move more. That's why some people are really good at running since they start and others not.</Text>
                            <Text style={styles.training}>You need to know your fitness level before you start running</Text>
                            <Text style={styles.training}>If you are sitting all day long you need to start with some stretching and short runs.</Text>
                            <Text style={styles.training}>On the other hand if your job implies a lot of movement you can start with longer and intensiver workouts (the stratching is still needed).</Text>
                        </View>
                        <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: 12, marginBottom: 10, marginTop: 5, marginLeft: 20, width: 300}}>
                            <Text style={styles.weekText}>Anything else?</Text>
                            <Text style={styles.training}>Yep, we are not done. A good technique means also less effort and more energy.</Text>
                            <Text style={styles.training}>In other words, the better your form, the easier running feels—especially when you start to get fatigued.</Text>
                            <Text style={styles.training}>While everyone’s natural mechanics are different, here’s what you should be doing to ensure proper running form, from your head to your toes.</Text>
                        </View>
                        <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: 12, marginBottom: 10, marginTop: 5, marginLeft: 20, width: 300}}>
                            <Text style={styles.weekText}>Head</Text>
                            <Text style={styles.training}>You might think running is all about your lower body, but your run technique needs to be dialed in from the top down.</Text>
                            <Text style={styles.training}>That said, don’t look at your feet. Don’t tilt your chin up or down, which happens when people get tired.</Text>
                            <Text style={styles.training}>Really, your eyes can look anywhere, but a focused gaze helps maintain proper posture, which keeps your neck in proper alignment with your spine.</Text>
                        </View>
                        <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: 12, marginBottom: 10, marginTop: 5, marginLeft: 20, width: 300}}>
                            <Text style={styles.weekText}>Shoulders</Text>
                            <Text style={styles.training}>We spend so much time hunched over at our desks and on our phones, but it’s crucial to open up your shoulders while you run.</Text>
                            <Text style={styles.training}>You should pull them back, almost like you’re squeezing a pencil between your shoulder blades.</Text>
                            <Text style={styles.training}>If you’re starting to hunch over, it’s going to affect your speed or endurance.</Text>
                            <Text style={styles.training}>Ideally, your shoulders are moving independently of your torso and opposite of one another.</Text>
                            <Text style={styles.training}>So when you take a right step forward, your left shoulder is also forward, and therefore your right shoulder is back as your left leg is back.</Text>
                            <Text style={styles.training}>As the run goes on, it is common to get tight and tense in your shoulder area, almost like you're shrugging.</Text>
                            <Text style={styles.training}>But this will cost your body valuable energy so it’s important to stay relaxed.</Text>
                            <Text style={styles.training}>Shake out your arms, shrug your shoulders, and focus on loosening up, especially as you get fatigued.</Text>
                        </View>
                        <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: 12, marginBottom: 10, marginTop: 5, marginLeft: 20, width: 300}}>
                            <Text style={styles.weekText}>Arms</Text>
                            <Text style={styles.training}>The way you move your arms can help you move faster or slow you down.</Text>
                            <Text style={styles.training}>Your arms should be at a 90-degree angle. Your palms or fists move from chin to hip.</Text>
                            <Text style={styles.training}>That’s going to help you propel your body forward. Keep your elbows close to your sides.</Text>
                            <Text style={styles.training}>Try pointing your thumbs to the ceiling to keep your arms in line or imagining an invisible line that runs down the center of your body—don't let your hands cross over that line.</Text>
                        </View>
                        <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: 12, marginBottom: 10, marginTop: 5, marginLeft: 20, width: 300}}>
                            <Text style={styles.weekText}>Hands</Text>
                            <Text style={styles.training}>This sounds like such a minor thing in the bigger running picture, but don’t forget to keep your hands relaxed.</Text>
                            <Text style={styles.training}>The more you squeeze your hands, the more energy that you're getting rid of through your hands—but you want all that energy to go into your actual running.</Text>
                        </View>
                        <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: 12, marginBottom: 10, marginTop: 5, marginLeft: 20, width: 300}}>
                            <Text style={styles.weekText}>Hips</Text>
                            <Text style={styles.training}>When you’re running, you want lean slightly into the run versus running completely upright.</Text>
                            <Text style={styles.training}>That lean should come from your hips, not from rolling your shoulders forward.</Text>
                            <Text style={styles.training}>The National Academy of Sports Medicine, backs this recommendation up, saying that your lumbo-pelvic-hip complex should have a “slight lean during acceleration”.</Text>
                            <Text style={styles.training}>That means your torso will be slightly forward of your hips.</Text>
                        </View>
                        <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: 12, marginBottom: 10, marginTop: 5, marginLeft: 20, width: 300}}>
                            <Text style={styles.weekText}>Overwhelmed by information?</Text>
                            <Text style={styles.training}>Don't worry, it may take some time, but once you get used to these aspects you'll run smoothly, more efficient and without injuries.</Text>
                            <Text style={styles.training}>Take your time, read everything carefully and pay attention to what you've learned.</Text>
                            <Text style={styles.training}>Try to film yourself when you run to see if you are actually running with a proper form</Text>
                            <Text style={styles.training}>And last but not least:<Text style={styles.numberText}> Enjoy it!!</Text></Text>
                        </View>
                        <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.0)', borderRadius: 12, marginBottom: 10, marginTop: 5, marginLeft: 20, width: 250}}>
                            <View style={styles.videoAligment}>
                                <Video
                                    source={ require ('./RunningTechniqueVideo.mp4') }
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
        marginLeft: 20,
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

    quoteText: {
        marginLeft: 15,
        fontStyle: 'italic'
    },

    training: {
        marginLeft: 15
    },
    
    numberText: {
        fontWeight: 'bold',
        fontSize: 16
    },

    videoAligment: {
        marginLeft: 26
    }

});


export default RunningTechnique;