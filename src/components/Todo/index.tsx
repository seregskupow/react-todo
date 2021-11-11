import styles from './todo.module.scss';
import { FaUndo, FaTimes } from 'react-icons/fa';
import Button from '@/components/Button';
import { priorities } from '@/data/index';
import { StoresContext } from '@/context/index';
import { useContext } from 'react';
import { observer } from 'mobx-react-lite';

interface TodoProps {
  id: number;
  title: string;
  body: string;
  priority: number;
  complete: boolean;
  onDeleteTodo: (id: number) => void;
  onComleteTodo: (id: number) => void;
}

const Todo: React.FC<TodoProps> = observer(
  ({ id, title, body, priority, complete, onDeleteTodo, onComleteTodo }) => {
    const { searchStore, modalStore, todoStore } = useContext(StoresContext);
    const priorityCls =
      priorities.find((item) => item.value === priority)?.text || 'normal';
    return (
      <div className={styles.todo}>
        <div className={styles.todo__controls}>
          <div className={styles.btn}>
            {complete && (
              <Button>
                <FaUndo />
              </Button>
            )}
          </div>
          <div className={styles.btn}>
            <Button danger>
              <FaTimes />
            </Button>
          </div>
        </div>

        <div
          className={[styles.todo__inner, complete && styles.complete].join(
            ' '
          )}
        >
          <h1 className={styles.todo__title}>{title}</h1>
          <p className={styles.todo__body}>
            {body.replace(/\r\n/g, '<br />').replace(/[\r\n]/g, '<br />')}
          </p>
          <div className={styles.todo__bottom}>
            <div
              className={[styles.todo__status, styles[priorityCls]].join(' ')}
            >
              {priorityCls}
            </div>
            <div className={styles.todo__menu}>
              <span>...</span>
              <ul>
                <li onClick={() => onComleteTodo(id)}>done</li>
                <li
                  onClick={() => {
                    todoStore.setIdToEdit(id);
                    modalStore.openEditModal(id);
                  }}
                >
                  edit
                </li>
                <li onClick={() => onDeleteTodo(id)}>delete</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default Todo;
