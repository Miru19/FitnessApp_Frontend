import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react';

import FirstPage from './FirstPage';
import SecondPage from './SecondPage';

import GymClass from './Gym';
import RunningClass from './Running';
import KickBoxClass from './KickBox';

import CoreClass from './GymFolder/Core'
import LowerBodyClass from './GymFolder/LowerBody'
import UpperBodyClass from './GymFolder/UpperBody'
import FullBodyClass from './GymFolder/FullBody'

import { TempoRun } from './RunningFolder/TempoRun';
import { IntervalRun } from './RunningFolder/IntervalRun';
import { EasyRun } from './RunningFolder/EasyRun';
import { RunningTechnique } from './RunningFolder/RunningTechnique';

import KickBoxInfo from './kickFolder/KickBoxinfo';
import KickBoxGear from './kickFolder/KickBoxGear';
import KickBoxBasics from './kickFolder/kickBasics';
import KickBoxTrainings from './kickFolder/kickTrainings';

const Stack = createStackNavigator();
const firstPage = new FirstPage();
const secondPage = new SecondPage();

const gymPage = new GymClass();
const corePage = new CoreClass();
const lowerBodyPage = new LowerBodyClass();
const upperBodyPage = new UpperBodyClass();
const fullBodyPage = new FullBodyClass();

const runningPage = new RunningClass();
const easyRunPage = new EasyRun();
const tempoRunPage = new TempoRun();
const intervalRunPage = new IntervalRun();
const runningTechnique = new RunningTechnique();

const kickboxPage = new KickBoxClass();
const kickboxInfo = new KickBoxInfo();
const kickboxGear = new KickBoxGear();
const kickboxBasics = new KickBoxBasics();
const kickboxTrainings = new KickBoxTrainings();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome to MBM - Fit!">

        <Stack.Screen
          name="Welcome to MBM - Fit!"
          component={firstPage.screen}
          options={{
            title: 'Welcome to MBM - Fit !',
            headerStyle: {
              backgroundColor: '#000000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center'
          }}
        />

        <Stack.Screen
          name="Let's get started!"
          component={secondPage.screen}
          options={{
            title: "Let's get started!",
            headerStyle: {
              backgroundColor: '#000000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center'
          }}
        />

        <Stack.Screen
          name="Gym"
          component={gymPage.screen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Core"
          component={corePage.screen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="LowerBody"
          component={lowerBodyPage.screen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="UpperBody"
          component={upperBodyPage.screen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="FullBody"
          component={fullBodyPage.screen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Running"
          component={runningPage.screen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="EasyRun"
          component={easyRunPage.screen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="TempoRun"
          component={tempoRunPage.screen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="IntervalRun"
          component={intervalRunPage.screen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="RunningTechnique"
          component={runningTechnique.screen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="KickBox"
          component={kickboxPage.screen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="KickBoxInfo"
          component={kickboxInfo.screen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="KickBoxGear"
          component={kickboxGear.screen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="KickBoxBasics"
          component={kickboxBasics.screen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="KickBoxTrainings"
          component={kickboxTrainings.screen}
          options={{ headerShown: false }}
        />  

      </Stack.Navigator>
    </NavigationContainer>
  );
}

