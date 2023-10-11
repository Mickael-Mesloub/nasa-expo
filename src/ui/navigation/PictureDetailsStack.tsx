import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PictureDetailsStackParamsList } from './types/PictureDetailsStackParamsList';
import PictureDetailsScreen from '../screens/PictureDetailsScreen';

const Stack = createNativeStackNavigator<PictureDetailsStackParamsList>();

export const PictureDetailsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PictureDetailsScreen"
        component={PictureDetailsScreen}
      />
    </Stack.Navigator>
  );
};
