import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  @ApiProperty({
    type:String,
    description: 'The title of task',
    default: ''
  })
  title: string;


  @IsNotEmpty()
  @ApiProperty({
    type:String,
    description: 'The description of task',
    default: ''
  })
  description: string;
}
