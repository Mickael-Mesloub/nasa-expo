import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, StyleSheet, View } from 'react-native';
import React from 'react';
import { usePictureDetailsSreenRoute } from '../../navigation/hooks/useRouteHooks';
import { Image } from 'expo-image';

const PictureDetailsScreen = () => {
  const route = usePictureDetailsSreenRoute();
  const { picture } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Image source={{ uri: picture.url }} />
      </View>
      <Text>{picture.title}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default PictureDetailsScreen;
