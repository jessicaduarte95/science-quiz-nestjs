import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  InternalServerErrorException,
} from '@nestjs/common';
import { OptionsService } from './options.service';
import { CreateOptionDto } from './dto/create-option.dto';

@Controller('options')
export class OptionsController {
  constructor(private readonly optionsService: OptionsService) {}

  @Post()
  create(@Body() createOptionDto: CreateOptionDto) {
    return this.optionsService.create(createOptionDto);
  }

  @Get(':level')
  async getOptionsByLevel(@Param('level') level: number) {
    try {
      const result = await this.optionsService.getOptionsByLevel(+level);
      return {
        message: 'got_options_question_successfully',
        statusCode: 200,
        data: result,
      };
    } catch (error) {
      throw new InternalServerErrorException({
        message: error.message || 'got_options_question',
        error: error.toString(),
      });
    }
  }
}
