import { Controller, Get, Post, Body, Param, Res } from '@nestjs/common';

import { Response } from 'express';

import { QuestionsService } from './questions.service';

import { CreateQuestionDto } from './dto/create-question.dto';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Post()
  create(@Body() createQuestionDto: CreateQuestionDto, @Res() res: Response) {
    try {
      const result = this.questionsService.create(createQuestionDto);
      return res.status(201).json({
        message: 'question_created_successfully',
        result,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message || 'error_created_question',
        error: error.toString(),
      });
    }
  }

  @Get(':level')
  find(@Param('level') level: string, @Res() res: Response) {
    try {
      const result = this.questionsService.find(+level);
      return res.status(20).json({
        message: 'got_questions_successfully',
        result,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message || 'got_questions_question',
        error: error.toString(),
      });
    }
  }
}
