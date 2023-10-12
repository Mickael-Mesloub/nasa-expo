import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, StatusBar } from 'react-native';
import React from 'react';
import { COLORS } from '../../../core/theme';
import PictureDetails from './components/PictureDetails';

const PictureDetailsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <PictureDetails />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.tertiary,
    paddingTop: StatusBar.currentHeight,
  },
});

export default PictureDetailsScreen;
