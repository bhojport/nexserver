import { Count, Filter, Where } from '@loopback/repository';
import { Product } from '../models';
import { ProductRepository } from '../repositories';
export declare class ProductController {
    productRepository: ProductRepository;
    constructor(productRepository: ProductRepository);
    create(product: Product): Promise<Product>;
    count(where?: Where): Promise<Count>;
    find(filter?: Filter): Promise<Product[]>;
    updateAll(product: Product, where?: Where): Promise<Count>;
    findById(id: string): Promise<Product>;
    updateById(id: string, product: Product): Promise<void>;
    replaceById(id: string, product: Product): Promise<void>;
    deleteById(id: string): Promise<void>;
}
