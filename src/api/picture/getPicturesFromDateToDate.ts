import { useQuery } from '@tanstack/react-query';
import { ExtractFnReturnType, QueryConfig } from '../reactQuery';
import { api_key, axios } from '../axios';
import { PicturesDto, picturesSchema } from '../../models/picture/picture.dto';
import { PictureEntity } from '../../models/picture/picture.entity';

export const getPicturesFromDateToDate = async (
  start_date: string,
  end_date?: string
): Promise<PictureEntity[]> => {
  const response = await axios.get<PicturesDto>('', {
    params: {
      api_key: api_key,
      start_date: start_date,
      end_date: end_date,
      thumbs: true,
    },
  });
  return picturesSchema.parse(response.data).reverse();
};

type QueryFnType = typeof getPicturesFromDateToDate;
type UseGetPicturesFromDateToDateOptions = {
  start_date: string;
  end_date?: string;
  config?: QueryConfig<QueryFnType>;
};

export const useGetPicturesFromDateToDate = ({
  config,
  start_date,
  end_date,
}: UseGetPicturesFromDateToDateOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['picturesFromDateToDate'],
    queryFn: () => getPicturesFromDateToDate(start_date, end_date),
  });
};
