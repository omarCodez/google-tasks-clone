import React, {FC, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

interface TaskProps {
  title: string;
  details?: string;

  date?: Date;
}

const TaskCard: FC<TaskProps> = ({title, details, date}) => {
  const [starred, setStarred] = useState<boolean>(false);

  const handleStarTask = () => {
    setStarred(!starred);
  };

  return (
    <View className="flex-row justify-between">
      <View></View>
      <View>
        <Text>{title}</Text>
        {details && <Text>{details}</Text>}
        {/* date */}
        <View></View>
      </View>
      <TouchableOpacity onPress={handleStarTask}>
        {starred ? (
          <IonIcon name="ios-star-outline" size={23} />
        ) : (
          <IonIcon name="ios-star-sharp" size={23} color="blue" />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default TaskCard;
