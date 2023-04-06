/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';

const StarredTabScreen = () => {
  const [starredTasks, setStarredTasks] = useState<string[]>([]);
  return (
    <SafeAreaView className="p-5">
      <View>
        <Text>House</Text>
      </View>
      <View>
        {starredTasks.length === 0 ? (
          <View className="justify-center items-center space-y-3">
            <Text className="font-semibold text-2xl">No starred tasks</Text>
            <Text className="text-lg text-center px-8">
              Mark important tasks with a star so you can easily find them here
            </Text>
          </View>
        ) : (
          <View></View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default StarredTabScreen;
