import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import 'i18next';
import i18n from '../../core/i18n';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeStack from './HomeStack';
import GalleryStack from './GalleryStack';
import SearchStack from './SearchStack';
import { COLORS, SIZES } from '../../core/theme';
import { TabNavigatorParamList } from './types/TabNavigatorParamList';
import { useTranslation } from 'react-i18next';

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
  }
}
const Tab = createMaterialBottomTabNavigator<TabNavigatorParamList>();

const AppTab = () => {
  const { t } = useTranslation();

  return (
    <Tab.Navigator activeColor={COLORS.primary} initialRouteName="HomeStack">
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: t('tabBar.home'),
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
          tabBarLabel: t('tabBar.gallery'),
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
          tabBarLabel: i18n.t('tabBar.search'),
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
