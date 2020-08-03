import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from 'src/interfaces/todo.interface';
import { CreateTodoDto } from 'src/dto/create-todo.dto';

// localhost:3000/todos
@Controller('todos')
export class TodosController {

    constructor(private readonly todosService: TodosService) {}

    @Get(':id')
    findOne(@Param('id')id: string) {
        console.log('id dans controller :', id);

       return  this.todosService.findOne(id);
    }

    @Get()
    findAll(): Todo[] {
        return this.todosService.findAll();
    }

    @Post()
    createTodo( @Body() newTodo: CreateTodoDto )  {
        console.log('new todo yo -> ', newTodo);
        this.todosService.create(newTodo)
    }

    @Patch(':id')
    updateTodo(@Param('id') id: string, @Body() todo:CreateTodoDto) {
        return this.todosService.update(id, todo)
    }
    
    @Delete(':id')
    deleteTodo(@Param('id') id: string) {
        return this.todosService.delete(id)
    }
}
