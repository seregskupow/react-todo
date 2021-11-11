import { TodoDto } from '@/dto/todo.dto';
import { makeAutoObservable } from 'mobx';

class TodoStore {
  todos: TodoDto[] = [];

  idToEdit: number = -1;

  constructor() {
    makeAutoObservable(this, {}, { deep: true });
  }

  setTodos(todos: TodoDto[]) {
    this.todos = todos;
  }

  setIdToEdit(id: number) {
    this.idToEdit = id;
  }

  get todoToEdit() {
    const todo = this.todos.find((todo) => todo.id === this.idToEdit);
    if (!todo) {
      throw new Error('Id mismatch occured');
    }
    return todo;
  }
}

export default TodoStore;
