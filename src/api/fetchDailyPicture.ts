import { api_key, axios } from './axios';
import { pictureSchema } from '../models/picture.dto';

export const fetchDailyPicture = async () => {
  const response = await axios.get('', {
    params: {
      api_key: api_key,
    },
  });

  return pictureSchema.parse(response.data);
};
