import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const GalleryScreen = () => {
  return (
    <View style={styles.container}>
      <Text>GalleryScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default GalleryScreen;
