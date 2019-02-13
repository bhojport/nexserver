import { Entity, model, property } from '@loopback/repository';

@model()
export class Product extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  productImage: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'string',
    required: true,
  })
  price: string;

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  sizes?: string[];

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  colors: string[];

  @property({
    type: 'string',
    id: true,
    generated: true
  })
  id?: string;


  constructor(data?: Partial<Product>) {
    super(data);
  }
}
