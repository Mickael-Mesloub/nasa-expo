import React from 'react';
import AppTab from './AppTab';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackParamsList } from './types/AppStackParamsList';
import { PictureDetailsStack } from './PictureDetailsStack';

const Stack = createNativeStackNavigator<AppStackParamsList>();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AppTab"
        component={AppTab}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PictureDetailsStack"
        component={PictureDetailsStack}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
