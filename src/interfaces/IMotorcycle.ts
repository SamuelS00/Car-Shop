import { z } from 'zod';
import { IVehicle } from './IVehicle';

const motorcycleZodSchema = z.object({
  model: z.string().min(3),
  year: z.number().int().min(1900).max(2022),
  color: z.string().min(3),
  status: z.boolean().optional(),
  buyValue: z.number().int(),
  category: z.enum(['Street', 'Custom', 'Trail']),
  engineCapacity: z.number().lte(2500),
});
  
type Motorcycle = z.infer<typeof motorcycleZodSchema>;
  
export interface IMotorcycle extends IVehicle, Motorcycle { }
  
export { motorcycleZodSchema };
