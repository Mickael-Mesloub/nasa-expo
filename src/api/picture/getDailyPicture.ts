import { useQuery } from '@tanstack/react-query';
import { ExtractFnReturnType, QueryConfig } from '../reactQuery';
import { api_key, axios } from '../axios';
import { PictureDto, pictureSchemaDto } from '../../models/picture/picture.dto';
import {
  PictureDtoToEntity,
  PictureEntity,
} from '../../models/picture/picture.entity';

export const getDailyPicture = async (): Promise<PictureEntity> => {
  const response = await axios.get<PictureDto>('', {
    params: {
      api_key: api_key,
    },
  });
  return PictureDtoToEntity(pictureSchemaDto.parse(response.data));
};

type QueryFnType = typeof getDailyPicture;

type UseGetDailyPictureOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const useGetDailyPicture = ({
  config,
}: UseGetDailyPictureOptions = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['dailyPicture'],
    queryFn: () => getDailyPicture(),
  });
};
