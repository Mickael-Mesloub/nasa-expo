import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { PictureDetailsStackParamList } from '../types/PictureDetailsStackParamList';
import { useNavigation } from '@react-navigation/native';
import { AppStackParamList } from '../types/AppStackParamList';

export const usePictureDetailsStackNavigation = () => {
  return useNavigation<
    NativeStackNavigationProp<PictureDetailsStackParamList>
  >();
};

export function useAppStackNavigation() {
  return useNavigation<NativeStackNavigationProp<AppStackParamList>>();
}
