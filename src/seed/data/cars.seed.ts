import { v4 as uuid } from "uuid";
import { Car } from "src/cars/interfaces/car.interface";

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    name: 'Toyota',
    year: 2023,
  },
  {
    id: uuid(),
    name: 'Mercedez',
    year: 2024,
  },
  {
    id: uuid(),
    name: 'Jeep',
    year: 2020,
  },
];