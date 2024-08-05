import { Injectable } from '@nestjs/common';

import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';
import { CARS_SEED } from './data/cars.seed';
import { BRAND_SEED } from './data/brands.seed';

@Injectable()
export class SeedService {

  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService
  ) {}

  populateDb() {
    this.carsService.fillData(CARS_SEED)
    this.brandsService.fillData(BRAND_SEED)

    return 'Seed excecuted'
  }
}
