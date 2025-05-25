import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { QuestionsModel } from './questions.model';

@Injectable()
export class QuestionsRepository {
  constructor(
    @InjectModel(QuestionsModel)
    private readonly questionModel: typeof QuestionsModel,
  ) {}
  async findTotalLevel() {
    return await this.questionModel.max('level');
  }
}
