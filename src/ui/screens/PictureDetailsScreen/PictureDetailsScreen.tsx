import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, StyleSheet, View } from 'react-native';
import React from 'react';
import { usePictureDetailsSreenRoute } from '../../navigation/hooks/useRouteHooks';
import { Image } from 'expo-image';
import { COLORS } from '../../../core/theme';

const PictureDetailsScreen = () => {
  const route = usePictureDetailsSreenRoute();
  const { picture } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={{ uri: picture.url }} />
      </View>
      <Text>{picture.title}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.tertiary,
  },
});

export default PictureDetailsScreen;
