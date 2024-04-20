import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user-entity';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import * as cors from 'cors'; // Импортируем cors

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '94.241.169.123',
      port: 5432,
      username: 'postgres',
      password: 'hYper1945fRog',
      database: 'user_remote_database',
      entities: [User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cors()).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}
