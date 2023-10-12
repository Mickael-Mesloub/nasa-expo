import { RouteProp, useRoute } from '@react-navigation/native';
import { PictureDetailsStackParamList } from '../types/PictureDetailsStackParamList';

// export const usePictureDetailsSreenRoute = () => {
//   return useRoute<
//     RouteProp<PictureDetailsStackParamList, 'PictureDetailsScreen'>
//   >();
// };

export function usePictureDetailsSreenRoute<
  T extends keyof PictureDetailsStackParamList,
>() {
  return useRoute<RouteProp<PictureDetailsStackParamList, T>>();
}
