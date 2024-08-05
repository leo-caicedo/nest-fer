import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
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

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    
    if (!car) throw new NotFoundException(`Car with id '${id}' not found`);

    return car;
  }

  createOne(createCarDto: CreateCarDto) {
    const newCard: Car = {...createCarDto, id: uuid()}

    this.cars.push(newCard)

    return newCard
  }

  updateOne(id: string, updateCarDto: UpdateCarDto) {
    const car = this.findOneById(id)
    const indexCar = this.cars.findIndex(car => car.id === id)

    this.cars[indexCar] = {...car, ...updateCarDto, id}

    return this.cars[indexCar]
  }

  deleteOne(id: string) {
    this.findOneById(id)

    const indexCar = this.cars.findIndex(car => car.id === id)
    this.cars.splice(indexCar, 1)

    return 'Car removed'
  }

  fillData(cars: Car[]) {
    this.cars = cars
  }
}
