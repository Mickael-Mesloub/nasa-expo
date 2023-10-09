import { SafeAreaView } from 'react-native';
import React from 'react';
import PictureGallery from '../components/PictureGallery';

const GalleryScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PictureGallery />
    </SafeAreaView>
  );
};

export default GalleryScreen;
