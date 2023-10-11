import { z } from 'zod';

export const pictureSchemaDto = z.object({
  title: z.string().optional(),
  copyright: z.string().optional(),
  date: z.string(),
  explanation: z.string(),
  hdurl: z.string(),
  url: z.string(),
  thumbs: z.string().optional(),
});

export const picturesSchema = z.array(pictureSchemaDto);
export type PictureDto = z.infer<typeof pictureSchemaDto>;
export type PicturesDto = z.infer<typeof picturesSchema>;
export type Optional<T> = T | null | undefined;
