import Button from '@/components/Button';
import TextInput from '@/components/TextInput';
import { StoresContext } from '@/context/index';
import { priorities } from '@/data/index';
import { TodoDto } from '@/dto/todo.dto';
import React, { useContext, useState } from 'react';
import Select from '../Select';
import styles from './todoform.module.scss';

interface TodoFormProps {
  todo?: Omit<TodoDto, 'complete'>;
  onFormSubmit: (todo: Omit<TodoDto, 'id' | 'complete'>) => void;
}
const TodoForm: React.FC<TodoFormProps> = ({
  onFormSubmit = () => {},
  todo,
}) => {
  const { modalStore } = useContext(StoresContext);
  const [priority, setPriority] = useState<number>(todo?.priority || 1);
  const [title, setTitle] = useState<string>(todo?.title || '');
  const [description, setDescription] = useState<string>(todo?.body || '');

  const onFormSubmitHandler: React.FormEventHandler = (e: React.FormEvent) => {
    e.preventDefault();
    onFormSubmit({
      title,
      body: description,
      priority,
    });
    modalStore.setShowModal(false);
  };

  return (
    <div
      className={styles.todo__form__wrapper}
      onClick={(e) => {
        if (e.currentTarget !== e.target) return;
        modalStore.setShowModal(false);
      }}
    >
      <div className={styles.todo__form}>
        <form className={styles.form} onSubmit={onFormSubmitHandler}>
          <div className={styles.form__item}>
            <p className={styles.label}>Title:</p>
            <TextInput
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              maxLength={20}
              required
            />
          </div>
          <div className={styles.form__item}>
            <p className={styles.label}>Description:</p>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className={styles.form__item}>
            <p className={styles.label}>Priority:</p>
            <Select
              value={priority}
              onChange={(e) => setPriority(+e.target.value)}
            >
              {priorities
                .filter((item) => item.value !== 0)
                .map(({ uid, value, text }) => (
                  <option key={uid} value={value}>
                    {text}
                  </option>
                ))}
            </Select>
          </div>
          <div className={styles.form__controls}>
            <Button
              onClick={() => {
                modalStore.setShowModal(false);
              }}
              children='Close'
            />
            <Button type='submit' children='Save' />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
