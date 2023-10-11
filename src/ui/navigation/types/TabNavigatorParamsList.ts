import { NavigatorScreenParams } from '@react-navigation/native';
import { HomeStackParamsList } from './HomeStackParamsList';
import { GalleryStackParamsList } from './GalleryStackParamsList';
import { SearchStackParamsList } from './SearchStackParamsList';

export type TabNavigatorParamsList = {
  HomeStack: NavigatorScreenParams<HomeStackParamsList>;
  GalleryStack: NavigatorScreenParams<GalleryStackParamsList>;
  SearchStack: NavigatorScreenParams<SearchStackParamsList>;
};
