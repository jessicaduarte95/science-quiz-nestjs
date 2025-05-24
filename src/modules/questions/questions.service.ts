import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';

@Injectable()
export class QuestionsService {
  create(createQuestionDto: CreateQuestionDto) {
    console.log('createQuestionDto', createQuestionDto);
    return createQuestionDto;
  }

  find(level: number) {
    return `This action returns a #${level} question`;
  }
}
