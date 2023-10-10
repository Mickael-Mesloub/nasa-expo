import { Share } from 'react-native';
import { PictureDto } from '../models/picture.dto';

export const sharePicture = async (data: PictureDto) => {
  try {
    const result = await Share.share({
      message: `Check this out 🤩✨ ! ${data?.title} \n ${data?.url}`,
    });
  } catch (error: any) {
    console.log(error.message);
  }
};
