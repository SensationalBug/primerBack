import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.entity';
import { v4 } from 'uuid';
import { UpdateTaskDto } from './dto/tasks.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: '1a',
      title: 'Hola',
      status: TaskStatus.PENDING,
    },
  ];
  getAllTasks() {
    return this.tasks;
  }
  createTasks(title: string) {
    const task = {
      id: v4(),
      title,
      status: TaskStatus.PENDING,
    };
    this.tasks.push(task);
    return task;
  }
  getTaskById(id: string) {
    return this.tasks.find((task) => task.id === id);
  }
  updateTasks(id: string, updateFields: UpdateTaskDto) {
    const task = this.getTaskById(id);
    const newTask = Object.assign(task, updateFields);
    this.tasks.map((task) => (task.id === id ? newTask : task));
    return newTask;
  }
  deleteTasks(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
