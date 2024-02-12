import { TaskStatus } from '../tasks.entity';

export class CreateTaskDto {
  title: string;
}

export class UpdateTaskDto {
  title?: string;
  status?: TaskStatus;
}
