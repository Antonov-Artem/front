import { z } from 'zod';

export const createPostSchema = z.object({
  text: z.string().trim().min(1, 'Text is required!'),
});
