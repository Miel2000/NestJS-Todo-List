import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { WtfModule } from './wtf/wtf.module';


@Module({
  imports: [TodosModule, WtfModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
