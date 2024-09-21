import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/User';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql_users_db',
      port: 3307,
      database: 'users_db',
      entities: [
        User
      ],
      synchronize: true,
      username: 'testuser',
      password: 'secret',
    }),
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
