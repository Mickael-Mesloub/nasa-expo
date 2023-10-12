import { NavigatorScreenParams } from '@react-navigation/native';
import { HomeStackParamList } from './HomeStackParamList';
import { GalleryStackParamList } from './GalleryStackParamList';
import { SearchStackParamList } from './SearchStackParamList';

export type TabNavigatorParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  GalleryStack: NavigatorScreenParams<GalleryStackParamList>;
  SearchStack: NavigatorScreenParams<SearchStackParamList>;
};
