import { Injectable } from '@nestjs/common';
import { CreateOptionDto } from './dto/create-option.dto';
import { OptionsRepository } from './options.repository';

@Injectable()
export class OptionsService {
  constructor(private readonly optionsRepository: OptionsRepository) {}

  create(createOptionDto: CreateOptionDto) {
    console.log('createOptionDto', createOptionDto);
    return 'This action adds a new option';
  }
  async getOptionsByLevel(level: number) {
    try {
      // Obtém as opções de determinado nível
      return await this.optionsRepository.findOptionsByLevel(level);
    } catch (error) {
      throw new Error(error);
    }
  }
}
