import { z } from 'zod';

export const pictureSchema = z.object({
  copyright: z.string(),
  date: z.string(),
  explanation: z.string(),
  hdurl: z.string(),
  url: z.string(),
});

export const picturesSchema = z.array(pictureSchema);
export type PictureDto = z.infer<typeof pictureSchema>;
export type PicturesDto = z.infer<typeof picturesSchema>;
