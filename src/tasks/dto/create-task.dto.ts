import { IsNotEmpty } from 'class-validator';

export class CreateTasksDto {
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  title: string;
}

export class GetTaskDto {
  @IsNotEmpty()
  id: string;
}
