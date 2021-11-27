import TodoForm from '@/components/TodoForm';
import { StoresContext } from '@/context/index';
import { TodoDto } from '@/dto/todo.dto';
import { collection, doc, setDoc } from 'firebase/firestore';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDocument } from 'react-firebase-hooks/firestore';
import { auth, firestore } from 'src/firebase';
interface EditFormProps {}
const EditForm: React.FC<EditFormProps> = observer(() => {
  const [user] = useAuthState(auth);
  const todosRef = collection(firestore, `users/${user?.uid}/todos/`);
  const { todoStore } = useContext(StoresContext);
  const [todoToEdit] = useDocument(doc(todosRef, todoStore.idToEdit));

  const editTodo = async (todo: Omit<TodoDto, 'id' | 'complete'>) => {
    const { title, priority, body } = todo;
    await setDoc(
      doc(todosRef, todoStore.idToEdit),
      {
        title,
        priority,
        body,
      },
      { merge: true }
    );
  };
  return (
    <>
      {todoToEdit && (
        <TodoForm
          onFormSubmit={editTodo}
          todo={{ ...(todoToEdit.data() as TodoDto), id: todoToEdit.id }}
        />
      )}
    </>
  );
});

export default EditForm;
