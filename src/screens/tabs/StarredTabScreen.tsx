/* eslint-disable @typescript-eslint/no-unused-vars */
import {TaskCard} from 'components';
import React, {useState} from 'react';
import {FlatList, Image, SafeAreaView, Text, View} from 'react-native';

const tasks = [
  {
    title: 'one task',
    details: 'details of task one',
  },
  {
    title: 'task two',
    details: 'details of task two',
  },
];

const StarredTabScreen = () => {
  const [starredTasks, setStarredTasks] = useState<string[]>([]);
  return (
    <SafeAreaView className="p-5">
      <View>
        {starredTasks.length === 0 ? (
          <View className="justify-center items-center space-y-3">
            <View className="mt-10">
              <Image source={require('../../assets/images/star.png')} alt="" />
            </View>
            <Text className="font-semibold text-2xl text-gray-900">
              No starred tasks
            </Text>
            <Text className="text-lg text-center px-8 text-gray-800">
              Mark important tasks with a star so you can easily find them here
            </Text>
          </View>
        ) : (
          <View>
            {/* show starred tasks */}
            <FlatList
              data={tasks}
              renderItem={({item}) => <TaskCard {...item} />}
              keyExtractor={item => item.title}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default StarredTabScreen;
