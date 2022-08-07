import 'reflect-metadata';
import { DataSourceOptions } from 'typeorm';
import { Post } from '../src/entity/Post';
import { User } from '../src/entity/User';

const options: DataSourceOptions = {
  type: 'mysql',
  host: '172.17.0.2',
  port: 3306,
  username: 'kazuhira',
  password: 'password',
  database: 'practice',
  synchronize: true, // データベースにスキーマを自動反映させる（本番環境ではtrueにしないこと）
  logging: false, // コンソールに実際に発行するSQLを出力する
  entities: ['src/entity/**/*.ts'],
  migrations: ['src/migration/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
};

// ここに、テストを書く