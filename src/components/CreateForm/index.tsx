import styles from './createform.module.scss';
import { TodoDto } from '@/dto/todo.dto';
import TodoForm from '@/components/TodoForm';

const CreateForm: React.FC = () => {
	const createTodo = (todo: Omit<TodoDto, 'id' | 'complete'>) => {
    const { title, priority, body } = todo;
  };

  return (
    <>
      <TodoForm onFormSubmit={createTodo}  />
    </>
  );
};

export default CreateForm;
