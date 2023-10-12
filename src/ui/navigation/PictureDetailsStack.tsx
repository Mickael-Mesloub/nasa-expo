import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PictureDetailsStackParamList } from './types/PictureDetailsStackParamList';
import PictureDetailsScreen from '../screens/PictureDetailsScreen/PictureDetailsScreen';

const Stack = createNativeStackNavigator<PictureDetailsStackParamList>();

const PictureDetailsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PictureDetailsScreen"
        component={PictureDetailsScreen}
      />
    </Stack.Navigator>
  );
};
export default PictureDetailsStack;
