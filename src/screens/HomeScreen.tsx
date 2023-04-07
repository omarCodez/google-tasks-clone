/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React, {useState} from 'react';
import {SafeAreaView, TouchableOpacity, Text, View, Image} from 'react-native';
import {StarredTabScreen, TasksTabScreen} from './tabs';
import IonIcon from 'react-native-vector-icons/Ionicons';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import MatComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import OctIcon from 'react-native-vector-icons/Octicons';

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
        <HomeTab.Screen
          name="StarredTabScreen"
          component={StarredTabScreen}
          options={{
            tabBarItemStyle: {width: '20%'},
            tabBarShowIcon: true,
            tabBarShowLabel: false,
            tabBarIcon: ({focused, color}) => {
              return (
                <View className="">
                  <EvilIcon name="star" size={30} />
                </View>
              );
            },
          }}
        />
        <HomeTab.Screen
          name="TasksTabScreen"
          component={TasksTabScreen}
          options={{
            tabBarShowLabel: false,
            tabBarItemStyle: {width: 80},
          }}
        />
      </HomeTab.Navigator>
      <View className="bg-gray-200 px-5 py-3 flex-row justify-between items-center">
        <View className="flex-row space-x-5">
          <TouchableOpacity>
            <IonIcon name="ios-list-sharp" size={20} />
          </TouchableOpacity>

          <TouchableOpacity className="transform rotate-90">
            <OctIcon name="arrow-switch" size={20} />
          </TouchableOpacity>

          <TouchableOpacity>
            <MatComIcon name="dots-horizontal" size={20} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity className="bg-blue-200 p-3 rounded-md">
          <IonIcon name="ios-add-outline" size={28} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
