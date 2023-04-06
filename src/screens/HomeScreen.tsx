/* eslint-disable @typescript-eslint/no-unused-vars */
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React, {useState} from 'react';
import {SafeAreaView, TouchableOpacity, Text, View, Image} from 'react-native';
import {StarredTabScreen, TasksTabScreen} from './tabs';

const HomeTab = createMaterialTopTabNavigator();

const HomeScreen = () => {
  const [initial, setInitial] = useState<string>('A');

  return (
    <SafeAreaView className="flex-1">
      <View className="p-5 flex-row items-center ml-auto w-full">
        <Text className="flex-1 text-center font-semibold text-2xl">Tasks</Text>
        <TouchableOpacity className="w-8 h-8 bg-blue-800 rounded-full items-center justify-center">
          <Text className="text-white font-normal text-xl">{initial}</Text>
        </TouchableOpacity>
      </View>

      {/* tab bottom */}
      <HomeTab.Navigator>
        <HomeTab.Screen name="StarredTabScreen" component={StarredTabScreen} />
        <HomeTab.Screen name="TasksTabScreen" component={TasksTabScreen} />
      </HomeTab.Navigator>
    </SafeAreaView>
  );
};

export default HomeScreen;
