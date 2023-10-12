import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import PictureGallery from './components/PictureGallery';

const GalleryScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PictureGallery />
    </SafeAreaView>
  );
};

export default GalleryScreen;
