import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import DailyPicture from './components/DailyPicture';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DailyPicture />
    </SafeAreaView>
  );
};

export default HomeScreen;
