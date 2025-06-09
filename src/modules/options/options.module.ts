import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { OptionsModel } from './options.model';
import { OptionsService } from './options.service';
import { OptionsController } from './options.controller';
import { OptionsRepository } from './options.repository';

@Module({
  imports: [SequelizeModule.forFeature([OptionsModel])],
  controllers: [OptionsController],
  providers: [OptionsService, OptionsRepository],
})
export class OptionsModule {}
