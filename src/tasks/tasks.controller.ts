import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Tasks } from './entity/tasks.interface';
import { Body, Delete, Param, Patch, Post, Query } from '@nestjs/common/decorators';
import { CreateTasksDto, GetTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService){}

    @Get()
    fetchTasks(): Tasks[]{
        return this.tasksService.getAllTasks();
    }

    @Get('/:id')
    fetchById(
        @Param('id') id: string
    ): Tasks{
        return this.tasksService.getSpecificTask(id);
    }

    @Post()
    createNewTask(
      @Body() createTasksDto: CreateTasksDto
    ): Tasks {
        return this.tasksService.createTasks(createTasksDto);
    }

    @Delete('/:id')
    deleteTask(
        @Param('id') id: string
        ): Tasks[]{
        return this.tasksService.deleteTask(id)
    }

    @Patch()
    updateTask(@Body() updateTaskDto:UpdateTaskDto):Tasks{
        return this.tasksService.updateTask(updateTaskDto);
    }
}
