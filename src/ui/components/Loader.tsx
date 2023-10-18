import React from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { COLORS } from '../../core/theme';

const Loader = () => {
  return <ActivityIndicator size={'large'} color={COLORS.secondary} />;
};

export default Loader;
