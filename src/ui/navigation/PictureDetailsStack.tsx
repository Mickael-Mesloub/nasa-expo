import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PictureDetailsStackParamList } from './types/PictureDetailsStackParamList';
import PictureDetailsScreen from '../screens/PictureDetailsScreen/PictureDetailsScreen';
import { COLORS } from '../../core/theme';

const Stack = createNativeStackNavigator<PictureDetailsStackParamList>();

const PictureDetailsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PictureDetailsScreen"
        component={PictureDetailsScreen}
        options={({ route }) => ({
          title: route.params.picture.title,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: COLORS.tertiary,
          },
        })}
      />
    </Stack.Navigator>
  );
};
export default PictureDetailsStack;
