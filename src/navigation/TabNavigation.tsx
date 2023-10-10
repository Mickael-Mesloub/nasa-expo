import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { HomeStackParamsList } from './HomeStackParamsList';
import HomeStack from './HomeStack';
import GalleryStack from './GalleryStack';
import { GalleryStackParamsList } from './GalleryStackParamsList';
import { SearchStackParamsList } from './SearchStackParamsList';
import SearchStack from './SearchStack';

type TabNavigatorParamsList = {
  HomeStack: HomeStackParamsList;
  GalleryStack: GalleryStackParamsList;
  SearchStack: SearchStackParamsList;
};

const Tab = createMaterialBottomTabNavigator<TabNavigatorParamsList>();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="GalleryStack"
        component={GalleryStack}
        options={{
          tabBarLabel: 'Gallery',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="folder-image"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SearchStack"
        component={SearchStack}
        options={{
          tabBarLabel: 'Gallery',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="folder-image"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
