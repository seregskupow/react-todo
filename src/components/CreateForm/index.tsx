import TodoForm from '@/components/TodoForm';
import { TodoDto } from '@/dto/todo.dto';
import { addDoc, collection } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firestore } from 'src/firebase';

const CreateForm: React.FC = () => {
  const [user] = useAuthState(auth);
  const todosRef = collection(firestore, `users/${user?.uid}/todos/`);
  const createTodo = async (todo: Omit<TodoDto, 'id' | 'complete'>) => {
    const { title, priority, body } = todo;
    await addDoc(todosRef, {
      title,
      body,
      priority,
      complete: false,
    });
  };

  return (
    <>
      <TodoForm onFormSubmit={createTodo} />
    </>
  );
};

export default CreateForm;
