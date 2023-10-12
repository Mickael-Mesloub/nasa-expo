import React from 'react';
import AppTab from './AppTab';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackParamList } from './types/AppStackParamList';
import PictureDetailsStack from './PictureDetailsStack';

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="AppTab" component={AppTab} />
      <Stack.Screen
        name="PictureDetailsStack"
        component={PictureDetailsStack}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
