import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { OptionsModel } from './options.model';

@Injectable()
export class OptionsRepository {
  constructor(
    @InjectModel(OptionsModel)
    private readonly optionsModel: typeof OptionsModel,
  ) {}

  async findOptionsByLevel(level: number) {
    return await this.optionsModel.findAll({
      where: {
        level,
      },
    });
  }
}
