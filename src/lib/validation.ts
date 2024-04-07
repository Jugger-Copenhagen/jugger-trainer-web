import { EXERTION_LEVELS } from '@/lib/types';
import { z } from 'zod';

export const SearchParamsSchema = z.object({
  name: z.string().optional(),
  tagIDs: z.array(z.string()),
  exertionLevel: z.enum(EXERTION_LEVELS).optional(),
  playersMin: z.coerce.number().positive().int().optional(),
  playersMax: z.coerce.number().positive().int().optional(),
});
