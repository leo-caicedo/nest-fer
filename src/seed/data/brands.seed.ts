import { v4 as uuid } from "uuid";
import { Brand } from "../../brands/entities/brand.entity";

export const BRAND_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'Tesla',
    createdAt: new Date().getTime()
  },
  {
    id: uuid(),
    name: 'Nissan',
    createdAt: new Date().getTime()
  },
  {
    id: uuid(),
    name: 'Chrevolet',
    createdAt: new Date().getTime()
  },
];