import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './inmem.datasource.json';

export class InmemDataSource extends juggler.DataSource {
  static dataSourceName = 'inmem';

  constructor(
    @inject('datasources.config.inmem', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
