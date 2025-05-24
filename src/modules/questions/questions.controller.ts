import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  InternalServerErrorException,
} from '@nestjs/common';

import { QuestionsService } from './questions.service';

import { CreateQuestionDto } from './dto/create-question.dto';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Post()
  create(@Body() createQuestionDto: CreateQuestionDto) {
    try {
      const result = this.questionsService.create(createQuestionDto);
      return {
        message: 'question_created_successfully',
        statusCode: 201,
        data: result,
      };
    } catch (error) {
      throw new InternalServerErrorException({
        message: error.message || 'error_created_question',
        error: error.toString(),
      });
    }
  }

  @Get(':level')
  find(@Param('level') level: string) {
    try {
      const result = this.questionsService.find(+level);
      return {
        message: 'got_questions_successfully',
        statusCode: 200,
        data: result,
      };
    } catch (error) {
      throw new InternalServerErrorException({
        message: error.message || 'got_questions_question',
        error: error.toString(),
      });
    }
  }
}
