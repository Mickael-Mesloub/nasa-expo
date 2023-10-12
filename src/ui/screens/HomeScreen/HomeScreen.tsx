import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import DailyPicture from './components/DailyPicture';
import { StyleSheet } from 'react-native';
import { COLORS } from '../../../core/theme';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <DailyPicture />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.tertiary,
  },
});

export default HomeScreen;
