import {DefaultCrudRepository} from '@loopback/repository';
import {Todo} from '../models';
import {InmemDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TodoRepository extends DefaultCrudRepository<
  Todo,
  typeof Todo.prototype.id
> {
  constructor(
    @inject('datasources.inmem') dataSource: InmemDataSource,
  ) {
    super(Todo, dataSource);
  }
}
