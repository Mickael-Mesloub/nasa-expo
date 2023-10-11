import { axios } from './axios';
import { picturesSchema } from '../models/picture/picture.dto';

type QueryParams = {
  date?: string;
  start_date?: string;
  end_date?: string;
  count?: number;
  thumbs?: boolean;
  api_key?: string;
};

export const fetchPictures = async (params: QueryParams) => {
  const response = await axios.get('', { params });

  return picturesSchema.parse(response.data);
};
