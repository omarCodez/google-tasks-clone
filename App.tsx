/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './src/screens';

const AppStack = createNativeStackNavigator();
// function Section({children, title}: SectionProps): JSX.Element {}

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName="HomeScreen">
        <AppStack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
