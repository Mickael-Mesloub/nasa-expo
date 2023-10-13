import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { COLORS, SIZES } from '../../core/theme';

const Loader = () => {
  return <ActivityIndicator size={'large'} color={COLORS.secondary} />;
};

const styles = StyleSheet.create({
  loadMoreLoader: {
    marginVertical: SIZES.medium,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Loader;
