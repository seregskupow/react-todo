import ControlPanel from '@/components/ControlPanel';
import CreateForm from '@/components/CreateForm';
import EditForm from '@/components/EditForm';
import EmptyTodos from '@/components/EmptyTodos';
import Loader from '@/components/Loader';
import Modal from '@/components/Modal';
import Todo from '@/components/Todo';
import { StoresContext } from '@/context/index';
import { TodoDto } from '@/dto/todo.dto';
import {
  collection,
  deleteDoc,
  doc,
  query,
  setDoc,
  where,
} from 'firebase/firestore';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import { auth, firestore } from 'src/firebase';
import styles from './todopage.module.scss';

const modals = {
  edit: <EditForm />,
  create: <CreateForm />,
};
const queryBuilder = (priority: number, status: number) => {
  const query = [];
  if (priority !== 0) query.push(where('priority', '==', priority));

  if (status !== 0) {
    switch (status) {
      case 1:
        query.push(where('complete', '==', true));
        break;
      case 2:
        query.push(where('complete', '==', false));
        break;
    }
  }
  return query;
};

const TodoPage: React.FC = observer(() => {
  const [user] = useAuthState(auth);
  const { modalStore, searchStore } = useContext(StoresContext);
  const todosRef = collection(firestore, `users/${user?.uid}/todos/`);
  const q = query(
    todosRef,
    ...queryBuilder(searchStore.priority, searchStore.status)
  );
  const [todosSnapshot, loading, error] = useCollection(q, {});
  const onDeleteTodo = async (id: string) => {
    await deleteDoc(doc(todosRef, id));
  };
  const onComleteTodo = async (id: string, complete: boolean) => {
    await setDoc(
      doc(todosRef, id),
      {
        complete: !complete,
      },
      { merge: true }
    );
  };

  let todos: any[] = [];
  if (todosSnapshot) {
    todos = todosSnapshot.docs.filter((todo) =>
      todo.data().title.toLowerCase().includes(searchStore.search.toLowerCase())
    );
  }

  return (
    <div className={styles.todo__page}>
      {modalStore.showModal && (
        <Modal children={modals[modalStore.modalMode]} />
      )}
      <ControlPanel />
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <Loader />}
      {!loading && (!todosSnapshot || !todos.length) && <EmptyTodos />}
      {todos ? (
        <div className={styles.todo__container}>
          {todos.map((todo) => (
            <Todo
              key={todo.data().id}
              {...{ ...(todo.data() as TodoDto), id: todo.id }}
              onDeleteTodo={onDeleteTodo}
              onComleteTodo={onComleteTodo}
            />
          ))}
        </div>
      ) : (
        <EmptyTodos />
      )}
    </div>
  );
});

export default TodoPage;
