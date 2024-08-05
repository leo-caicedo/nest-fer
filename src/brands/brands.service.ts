import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { Brand } from './entities/brand.entity';

import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    {
      id: uuid(),
      name: 'Toyota',
      createdAt: new Date().getTime()
    }
  ]

  create(createBrandDto: CreateBrandDto) {
    const {name} = createBrandDto

    const brand: Brand = {
      id: uuid(),
      name: name.toLowerCase(),
      createdAt: new Date().getTime()
    }

    this.brands.push(brand)

    return brand
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find(brand => brand.id === id)
    if (!brand)
      throw new NotFoundException(`Brand with id "${id}" not found`)
    
    return brand
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    const brand = this.findOne(id)
    const indexBrand = this.brands.findIndex(brand => brand.id === id)

    this.brands[indexBrand] = {
      ...brand,
      ...updateBrandDto,
      updatedAt: new Date().getTime()
    }

    return this.brands[indexBrand]
  }

  remove(id: string) {
    this.findOne(id)

    const indexBrand = this.brands.findIndex(brand => brand.id === id)
    this.brands.splice(indexBrand, 1)

    return 'Brand removed'
  }

  fillData(brands: Brand[]) {
    this.brands = brands
  }
}
