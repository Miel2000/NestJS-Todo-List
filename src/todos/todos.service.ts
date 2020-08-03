import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from 'src/interfaces/todo.interface';
import { CreateTodoDto } from 'src/dto/create-todo.dto';

@Injectable()
export class TodosService {

  todos: Todo[] = [

        {
            id: 1,
            title: 'todos app',
            description: 'create nestJS todo app',
            done: true
        },
        {
            id: 2,
            title: 'pain',
            description: 'achetez du pain',
            done: true
        }
    ];

    findOne(id: string) {
        console.log('id dans service :',id);
        return this.todos.find(todo => todo.id === Number(id));
    }

    findAll(): Todo[] {
        return this.todos;
    }

    create(todo: CreateTodoDto) {
          this.todos = [...this.todos, todo as Todo];
    }

    delete(id: string) {

        const nbOfTodosBeforeDelete = this.todos.length;
        this.todos = [...this.todos.filter(t => t.id !== +id)];
        if(this.todos.length < nbOfTodosBeforeDelete) {
            return { deletedTodos: 1, nbOfTodosBeforeDelete: this.todos.length }
        } else {
            return { deletedTodos: 0, nbOfTodosBeforeDelete: this.todos.length }

        }
     
    }

    update(id: string, todo: Todo) {

    const  todoToUpdate = this.todos.find(todo => todo.id === +id);

    if(!todoToUpdate) {
        return new NotFoundException('errooooorz');
    }

    if(todo.hasOwnProperty('done')) {
        
        todoToUpdate.done = todo.done
    }

    if (todo.title) {

        todoToUpdate.title = todo.title
    }

    if (todo.description) {

        todoToUpdate.description = todo.description
    }
    
    const updatedTodos = this.todos.map(t => t.id !== +id ? t : todoToUpdate);
    
    this.todos = [...updatedTodos];

    return { updatedTodo : 1, todo: todoToUpdate };

    }
}
