import { PictureDto } from './picture.dto';

export interface PictureEntity {
  title?: string;
  copyright?: string;
  date: string;
  explanation: string;
  hdurl: string;
  url: string;
  thumbs?: string;
}

export const PictureDtoToEntity = (dto: PictureDto): PictureEntity => {
  return {
    title: dto.title,
    copyright: dto.copyright,
    date: dto.date,
    explanation: dto.explanation,
    hdurl: dto.hdurl,
    url: dto.url,
    thumbs: dto.thumbs,
  };
};
