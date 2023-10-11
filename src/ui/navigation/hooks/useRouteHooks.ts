import { RouteProp, useRoute } from '@react-navigation/native';
import { PictureDetailsStackParamsList } from '../types/PictureDetailsStackParamsList';

export const usePictureDetailsSreenRoute = () => {
  return useRoute<
    RouteProp<PictureDetailsStackParamsList, 'PictureDetailsScreen'>
  >();
};
