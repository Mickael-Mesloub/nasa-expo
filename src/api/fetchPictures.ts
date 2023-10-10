import { api_key, axios } from './axios';
import { PictureDto, picturesSchema } from './pictureSchema';

export const fetchPictures = async (params: QueryParams) => {
  const response = await axios.get('', { params });

  return picturesSchema.parse(response.data);
};

type QueryParams = {
  date?: string;
  start_date?: string;
  end_date?: string;
  count?: number;
  thumbs?: boolean;
  api_key?: string;
};
