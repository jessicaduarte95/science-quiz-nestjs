import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { QuestionsRepository } from './questions.repository';

@Injectable()
export class QuestionsService {
  constructor(private readonly questionsRepository: QuestionsRepository) {}

  create(createQuestionDto: CreateQuestionDto) {
    console.log('createQuestionDto', createQuestionDto);
    return createQuestionDto;
  }

  find(level: number) {
    return `This action returns a #${level} question`;
  }

  async getTotalLevel() {
    try {
      // Busca o total de níveis
      const totalLevel = await this.questionsRepository.getTotalLevel();
      return {
        totalLevel: totalLevel,
      };
    } catch (error) {
      throw new Error(error);
    }
  }
}
