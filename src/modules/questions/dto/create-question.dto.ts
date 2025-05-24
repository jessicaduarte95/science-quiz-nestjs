import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateQuestionDto {
  @IsInt()
  @Min(1)
  level: number;

  @IsInt()
  @Min(1)
  numberQuestion: number;

  @IsString()
  @IsNotEmpty()
  question: string;
}
