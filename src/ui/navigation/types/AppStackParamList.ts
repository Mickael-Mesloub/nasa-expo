import { NavigatorScreenParams } from '@react-navigation/native';
import { PictureDetailsStackParamList } from './PictureDetailsStackParamList';
import { TabNavigatorParamList } from './TabNavigatorParamList';

export type AppStackParamList = {
  AppTab: NavigatorScreenParams<TabNavigatorParamList>;
  PictureDetailsStack: NavigatorScreenParams<PictureDetailsStackParamList>;
};
