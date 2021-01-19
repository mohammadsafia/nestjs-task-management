import { TaskStatus } from '../task-status.enum';
import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
const taskStatusValues = [TaskStatus.OPEN, TaskStatus.IN_PROGRESS, TaskStatus.DONE]

export class GetTasksFilterDto {

  @IsOptional()
  @IsIn(taskStatusValues)
  @ApiProperty({
    type: String,
    description: 'The status of task',
    default: 'OPEN',
    required: false
  })
  status: TaskStatus;

  @IsOptional()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'The search of task',
    default: '',
    required: false
  })
  search: string;
}
