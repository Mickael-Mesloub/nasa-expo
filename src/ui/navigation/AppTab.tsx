import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeStack from './HomeStack';
import GalleryStack from './GalleryStack';
import SearchStack from './SearchStack';
import { COLORS, SIZES } from '../../core/theme';
import { TabNavigatorParamsList } from './types/TabNavigatorParamsList';

const Tab = createMaterialBottomTabNavigator<TabNavigatorParamsList>();

const AppTab = () => {
  return (
    <Tab.Navigator activeColor={COLORS.primary} initialRouteName="HomeStack">
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name="home"
              color={focused ? COLORS.primary : color}
              size={SIZES.xLarge}
            />
          ),
        }}
      />
      <Tab.Screen
        name="GalleryStack"
        component={GalleryStack}
        options={{
          tabBarLabel: 'Gallery',
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name="folder-image"
              color={focused ? COLORS.primary : color}
              size={SIZES.xLarge}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SearchStack"
        component={SearchStack}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name="card-search"
              color={focused ? COLORS.primary : color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppTab;
