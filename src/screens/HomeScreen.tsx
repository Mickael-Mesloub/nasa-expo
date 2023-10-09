import { SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import DailyPicture from '../components/DailyPicture';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DailyPicture />
    </SafeAreaView>
  );
};

export default HomeScreen;
