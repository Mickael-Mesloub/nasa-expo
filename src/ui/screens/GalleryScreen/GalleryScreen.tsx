import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import PictureGallery from './components/PictureGallery';
import { StyleSheet } from 'react-native';
import { COLORS } from '../../../core/theme';

const GalleryScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <PictureGallery />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.tertiary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GalleryScreen;
