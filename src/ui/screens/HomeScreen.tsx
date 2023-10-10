import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import DailyPicture from '../components/DailyPicture';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamsList } from '../navigation/types/HomeStackParamsList';
import { usePicturesContext } from '../../provider/PicturesContext';

const HomeScreen = () => {
  const { pictures, setPictures } = usePicturesContext();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DailyPicture />
    </SafeAreaView>
  );
};

export default HomeScreen;
