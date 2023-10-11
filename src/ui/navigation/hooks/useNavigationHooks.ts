import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { PictureDetailsStackParamsList } from '../types/PictureDetailsStackParamsList';
import { useNavigation } from '@react-navigation/native';

export const usePictureDetailsStackNavigation = () => {
  return useNavigation<
    NativeStackNavigationProp<PictureDetailsStackParamsList>
  >();
};
