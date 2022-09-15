import { z } from 'zod';
import { IVehicle } from './IVehicle';

const carZodSchema = z.object({
  model: z.string().min(3),
  year: z.number().int().min(1900).max(2022),
  color: z.string().min(3),
  status: z.boolean().optional(),
  buyValue: z.number().int(),
  doorsQty: z.number().int().gte(2).lte(4),
  seatsQty: z.number().int().gte(2).lte(7),
});

type Car = z.infer<typeof carZodSchema>;

export interface ICar extends IVehicle, Car { }

export { carZodSchema };
