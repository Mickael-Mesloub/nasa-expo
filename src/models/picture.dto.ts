import { z } from 'zod';

export const pictureSchema = z.object({
  title: z.string().optional(),
  copyright: z.string().optional(),
  date: z.string(),
  explanation: z.string(),
  hdurl: z.string(),
  url: z.string(),
  thumbs: z.string().optional(),
});

export const picturesSchema = z.array(pictureSchema);
export type PictureDto = z.infer<typeof pictureSchema>;
export type PicturesDto = z.infer<typeof picturesSchema>;
export type Optional<T> = T | null | undefined;
