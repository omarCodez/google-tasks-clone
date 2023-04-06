/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {SafeAreaView, TouchableOpacity, Text, View, Image} from 'react-native';

const landingImage = require('../assets/images/toks.png');

const SplashScreen = () => {
  return (
    <SafeAreaView className="flex-1 p-5">
      {/* top */}
      <View className="w-[100%] h-[55%]">
        <Image source={landingImage} alt="" className="w-full h-full" />
      </View>
      {/* bottom */}
      <View className="h-[45%] items-center space-y-5 my-5">
        <Text className="text-2xl">Welcome to Toks</Text>
        <Text className="text-base text-center">
          Keep track of important things you need to get done in one place.
        </Text>
        <TouchableOpacity
          className="my-3 bg-blue-600 rounded-3xl my-4"
          activeOpacity={0.5}>
          <Text className="text-lg  font-normal  text-white px-8 py-2.5 ">
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
