import { Share } from 'react-native';
import { PictureDto } from '../api/pictureSchema';

export const sharePicture = async (data: PictureDto) => {
  try {
    const result = await Share.share({
      message: `Check this out 🤩✨ ! ${data?.title} \n ${data?.url}`,
    });

    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        console.log('share with activity type of: ', result.activityType);
      } else {
        console.log('shared');
      }
    } else if (result.action === Share.dismissedAction) {
      console.log('dismissed');
    }
  } catch (error: any) {
    console.log(error.message);
  }
};
