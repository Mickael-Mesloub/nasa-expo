import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, StyleSheet } from 'react-native';
import React from 'react';
import { usePictureDetailsSreenRoute } from '../navigation/hooks/useRouteHooks';

const PictureDetailsScreen = () => {
  const route = usePictureDetailsSreenRoute();
  const { picture } = route.params;

  return (
    <SafeAreaView>
      <Text>{picture.title}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default PictureDetailsScreen;
