import {  Repository } from "typeorm";
import { Task } from "../entity/task.entity";
import { CustomRepository } from "src/typeorm-ex.decorator";

@CustomRepository(Task)
export class TaskRepository extends Repository<Task>{

} 