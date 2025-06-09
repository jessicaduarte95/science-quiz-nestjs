import { IsInt, IsNotEmpty, IsString, Min, IsBoolean } from 'class-validator';

export class CreateOptionDto {
  @IsInt()
  @Min(1)
  question: number;

  @IsInt()
  @Min(1)
  level: number;

  @IsString()
  @IsNotEmpty()
  option: string;

  @IsBoolean()
  correct: boolean = false;
}
