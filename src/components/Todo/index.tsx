import Button from '@/components/Button';
import { StoresContext } from '@/context/index';
import { priorities } from '@/data/index';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { FaTimes, FaUndo } from 'react-icons/fa';
import styles from './todo.module.scss';

interface TodoProps {
  id: string;
  title: string;
  body: string;
  priority: number;
  complete: boolean;
  onDeleteTodo: (id: string) => void;
  onComleteTodo: (id: string, complete: boolean) => void;
}

const Todo: React.FC<TodoProps> = observer(
  ({ id, title, body, priority, complete, onDeleteTodo, onComleteTodo }) => {
    const { modalStore, todoStore } = useContext(StoresContext);
    const priorityCls =
      priorities.find((item) => item.value === priority)?.text || 'normal';

    const deleteTodohandler = () => {
      if (window.confirm('Delete todo?')) {
        onDeleteTodo(id);
      }
    };
    return (
      <div className={styles.todo}>
        <div className={styles.todo__controls}>
          <div className={styles.btn}>
            {complete && (
              <Button
                onClick={() => onComleteTodo(id, complete)}
                title='Restore todo'
              >
                <FaUndo />
              </Button>
            )}
          </div>
          <div className={styles.btn}>
            <Button danger onClick={deleteTodohandler} title='Delete todo'>
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
          <p className={styles.todo__body}>{body}</p>
          <div className={styles.todo__bottom}>
            <div
              className={[styles.todo__status, styles[priorityCls]].join(' ')}
            >
              {priorityCls}
            </div>
            <div className={styles.todo__menu}>
              <span>...</span>
              <ul>
                <li onClick={() => onComleteTodo(id, complete)}>done</li>
                <li
                  onClick={() => {
                    todoStore.setIdToEdit(id);
                    modalStore.openEditModal();
                  }}
                >
                  edit
                </li>
                <li onClick={deleteTodohandler}>delete</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default Todo;
