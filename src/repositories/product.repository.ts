import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Product} from '../models';
import {PostgresDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProductRepository extends DefaultCrudRepository<
  Product,
  typeof Product.prototype.id
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(Product, dataSource);
  }
}
