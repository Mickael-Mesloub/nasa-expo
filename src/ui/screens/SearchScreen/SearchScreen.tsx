import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { COLORS } from '../../../core/theme';

const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>SearchScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.tertiary,
  },
});

export default SearchScreen;
