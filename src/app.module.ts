import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import {TypeOrmModule} from '@nestjs/typeorm'
import { TypeOrmExModule } from './typeorm-ex.module';
import { TaskRepository } from './tasks/repository/task.repository';
import { UserManagementModule } from './user-management/user-management.module';

@Module({
  imports: [TasksModule,
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username:'postgres',
    password: 'postgres',
    database: 'task-management',
    autoLoadEntities: true,
    synchronize: true
  }),
  TypeOrmExModule.forCustomRepository([TaskRepository]),
  UserManagementModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
