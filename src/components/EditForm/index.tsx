import { TodoDto } from '@/dto/todo.dto';
import React, { useContext } from 'react';
import TodoForm from '@/components/TodoForm';
import { observer } from 'mobx-react-lite';
import { StoresContext } from '@/context/index';

interface EditFormProps {}
const EditForm: React.FC<EditFormProps> = observer(({}) => {
  const { todoStore } = useContext(StoresContext);
  const editTodo = (todo: Omit<TodoDto, 'id' | 'complete'>) => {
    const { title, priority, body } = todo;
  };
  return (
    <>
      <TodoForm onFormSubmit={editTodo} todo={todoStore.todoToEdit} />
    </>
  );
});

export default EditForm;
