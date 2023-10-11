import { NavigatorScreenParams } from '@react-navigation/native';
import { PictureDetailsStackParamsList } from './PictureDetailsStackParamsList';
import { TabNavigatorParamsList } from './TabNavigatorParamsList';

export type AppStackParamsList = {
  AppTab: NavigatorScreenParams<TabNavigatorParamsList>;
  PictureDetailsStack: NavigatorScreenParams<PictureDetailsStackParamsList>;
};
