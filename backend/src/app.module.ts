import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Post } from './entity/Post';
import { User } from './entity/User';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'user',
      database: 'mysql',
      password: 'password',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
