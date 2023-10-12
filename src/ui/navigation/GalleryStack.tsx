import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GalleryScreen from '../screens/GalleryScreen/GalleryScreen';
import { GalleryStackParamList } from './types/GalleryStackParamList';

const Stack = createNativeStackNavigator<GalleryStackParamList>();

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
