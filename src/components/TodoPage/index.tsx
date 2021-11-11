import styles from './todopage.module.scss';

import Todo from '@/components/Todo';
import Modal from '@/components/Modal';
import EditForm from '@/components/EditForm';
import ControlPanel from '@/components/ControlPanel';
import { TodoDto } from '@/dto/todo.dto';
import { StoresContext } from '@/context/index';
import { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import CreateForm from '../CreateForm';
const todos: TodoDto[] = [
  {
    title: 'Test',
    body: 'Lorem ipsum dolor',
    id: 323,
    complete: false,
    priority: 2,
  },
  {
    title: 'Tesast',
    body: 'Lorem ipsum dolor',
    id: 3344,
    complete: true,
    priority: 1,
  },
  {
    title: 'Tes45t',
    body: 'Lorem ipsum dolor',
    id: 35464,
    complete: false,
    priority: 3,
  },
  {
    title: 'Test2',
    body: 'Lorem ipsum dolor',
    id: 31234,
    complete: true,
    priority: 2,
  },
];

const modals = {
  edit: <EditForm />,
  create: <CreateForm />,
};

const TodoPage: React.FC = observer(() => {
  const { searchStore, modalStore, todoStore } = useContext(StoresContext);
  const onDeleteTodo = (id: number) => {};
  const onComleteTodo = (id: number) => {};

  useEffect(() => {
    todoStore.setTodos(todos);
  }, []);
  return (
    <div className={styles.todo__page}>
      {modalStore.showModal && (
        <Modal children={modals[modalStore.modalMode]} />
      )}
      <ControlPanel />
      <div className={styles.todo__container}>
        {todos.map((todo) => (
          <Todo
            {...todo}
            onDeleteTodo={onDeleteTodo}
            onComleteTodo={onComleteTodo}
          />
        ))}
      </div>
    </div>
  );
});

export default TodoPage;
