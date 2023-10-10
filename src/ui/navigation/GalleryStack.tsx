import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GalleryScreen from '../screens/GalleryScreen';
import { GalleryStackParamsList } from './types/GalleryStackParamsList';

const Stack = createNativeStackNavigator<GalleryStackParamsList>();

const GalleryStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="GalleryScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="GalleryScreen" component={GalleryScreen} />
    </Stack.Navigator>
  );
};

export default GalleryStack;
