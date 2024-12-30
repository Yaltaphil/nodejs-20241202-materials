import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { SharedmoduleModule } from './sharedmodule/sharedmodule.module';

@Module({
  imports: [TasksModule, SharedmoduleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// @Injectable()
// @Inject()
