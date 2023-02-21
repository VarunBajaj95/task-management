import { IsEnum } from "class-validator";
import { TaskStatus } from "../entity/tasks.interface";

export class UpdateTaskDto{
    id : string;
    title?: string;
    description?: string;
    @IsEnum(TaskStatus)
    status?: TaskStatus;
}