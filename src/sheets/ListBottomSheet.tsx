import React, {useRef, useMemo, useCallback} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import {SafeAreaView, Text, View} from 'react-native';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';

const ListBottomSheet = () => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <SafeAreaView className="divide-y">
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <View>
          <EvilIcon name="star" size={20} />
          <Text>Starred</Text>
        </View>

        <View>
          <View>
            <IonIcon name="ios-checkmark-outline" size={20} />
            <Text>My Tasks</Text>
          </View>

          {/* list newly created lists here... */}
        </View>

        <View>
          <IonIcon name="ios-add-outline" size={20} />
          <Text>Create new list</Text>
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default ListBottomSheet;
