import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus, Tasks } from './entity/tasks.interface';
import { randomUUID } from 'crypto';
import { CreateTasksDto, GetTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  private tasks: Tasks[] = [];

  getAllTasks(): Tasks[] {
    return this.tasks;
  }
  getSpecificTask(id: string): Tasks {
    const task = this.tasks.find((item) => item.id === id);
    if(!task) throw new NotFoundException({key : 'MISSING_TASK', statusCode: 404, message: 'Not found bro'});
    return task;
  }

  createTasks(createTasksDto: CreateTasksDto): Tasks {
    const { title, description } = createTasksDto;
    const task: Tasks = {
      id: randomUUID(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }

  deleteTask(id: string): Tasks[] {
    return this.tasks.filter((item) => item.id !== id);
  }

  updateTask(updateTaskDto: UpdateTaskDto): Tasks {
    const { id } = updateTaskDto;

    const task = this.getSpecificTask(id);
    const taskInd = this.tasks.findIndex((item) => item.id === id);

    const updatedTask = { ...task, ...updateTaskDto };

    this.tasks[taskInd] = updatedTask;
    return updatedTask;
  }
}
