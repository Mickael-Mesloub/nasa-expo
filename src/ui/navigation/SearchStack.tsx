import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from '../screens/SearchScreen';
import { SearchStackParamsList } from './types/SearchStackParamsList';

const Stack = createNativeStackNavigator<SearchStackParamsList>();

const SearchStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SearchScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
    </Stack.Navigator>
  );
};

export default SearchStack;
