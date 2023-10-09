import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';

const GalleryScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text>GalleryScreen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default GalleryScreen;
