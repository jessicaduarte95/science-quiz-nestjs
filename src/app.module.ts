import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { QuestionsModule } from './modules/questions/questions.module';
import * as config from 'config';

const db = config.get<any>('database');

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: db.dialect,
      host: db.host,
      port: db.port,
      username: db.username,
      password: db.password,
      database: db.database,
      autoLoadModels: true,
      synchronize: true,
    }),
    QuestionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
