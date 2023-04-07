/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, TaskDetailsScreen} from './src/screens';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const AppStack = createNativeStackNavigator();
// function Section({children, title}: SectionProps): JSX.Element {}

function App(): JSX.Element {
  return (
    <GestureHandlerRootView className="flex-1">
      <NavigationContainer>
        <AppStack.Navigator initialRouteName="HomeScreen">
          <AppStack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <AppStack.Screen name="TaskDetails" component={TaskDetailsScreen} />
        </AppStack.Navigator>
      </NavigationContainer>
      {/* <BottomSheet /> */}
    </GestureHandlerRootView>
  );
}

export default App;
