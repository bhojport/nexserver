import { Entity } from '@loopback/repository';
export declare class Product extends Entity {
    productImage: string;
    name: string;
    description: string;
    price: string;
    sizes?: string[];
    colors: string[];
    id?: string;
    constructor(data?: Partial<Product>);
}
