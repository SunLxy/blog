import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { Questions } from './entity/Questions'

export const AppDataSource = new DataSource({
  type: 'mongodb',
  database: 'free',
  synchronize: true,
  host: '127.0.0.1',
  port: 9999,
  username: 'carefree',
  password: 'sl123456',
  logging: false,
  entities: [Questions],
  migrations: [],
  subscribers: [],
})
