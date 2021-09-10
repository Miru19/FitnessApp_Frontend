import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react';

import FirstPage from './FirstPage';
import SecondPage from './SecondPage';

import GymClass from './Gym';

import CoreClass from './GymFolder/Core'
import LowerBodyClass from './GymFolder/LowerBody'
import UpperBodyClass from './GymFolder/UpperBody'
import FullBodyClass from './GymFolder/FullBody'

const Stack = createStackNavigator();
const firstPage = new FirstPage();
const secondPage = new SecondPage();

const gymPage = new GymClass();
const corePage = new CoreClass();
const lowerBodyPage = new LowerBodyClass();
const upperBodyPage = new UpperBodyClass();
const fullBodyPage = new FullBodyClass();

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

  

      </Stack.Navigator>
    </NavigationContainer>
  );
}

