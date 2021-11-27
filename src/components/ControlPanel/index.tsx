import Button from '@/components/Button';
import Select from '@/components/Select';
import TextInput from '@/components/TextInput';
import { StoresContext } from '@/context/index';
import { priorities, statuses } from '@/data/index';
import { Priority, Status } from '@/store/searchStore';
import { collection, deleteDoc, doc } from 'firebase/firestore';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import { FaTimes } from 'react-icons/fa';
import { auth, firestore } from 'src/firebase';
import styles from './controlpanes.module.scss';

const ControlPanel: React.FC = observer(() => {
  const { searchStore, modalStore } = useContext(StoresContext);
  const [user] = useAuthState(auth);
  const todosRef = collection(firestore, `users/${user?.uid}/todos/`);
  const [todosSnapshot] = useCollection(todosRef, {});

  const onDeleteAll = () => {
    todosSnapshot?.docs.forEach(async (todo) => {
      await deleteDoc(doc(todosRef, todo.id));
    });
    searchStore.resetSearch();
  };
  return (
    <div className={styles.control__panel}>
      <TextInput
        value={searchStore.search}
        onChange={(e) => searchStore.setSearch(e.target.value)}
        placeholder='search . . .'
        maxLength={10}
      />

      <div className={styles.select}>
        <p>Show by status: </p>
        <Select
          onChange={(e) => searchStore.setStatus(+e.target.value as Status)}
          value={searchStore.status}
        >
          {statuses.map(({ uid, value, text }) => (
            <option key={uid} value={value}>
              {text}
            </option>
          ))}
        </Select>
      </div>

      <div className={styles.select}>
        <p>Show by priority: </p>
        <Select
          onChange={(e) => searchStore.setPriority(+e.target.value as Priority)}
          value={searchStore.priority}
        >
          {priorities.map(({ uid, value, text }) => (
            <option key={uid} value={value}>
              {text}
            </option>
          ))}
        </Select>
      </div>
      <Button
        children='Create'
        onClick={() => {
          modalStore.openCreateModal();
        }}
      />
      <Button
        danger
        onClick={() => {
          if (window.confirm('Are you sure to delete all notes?')) {
            onDeleteAll();
          }
        }}
      >
        <p className={styles.clear__all}>
          <span>Delete all</span>
          <FaTimes />
        </p>
      </Button>
    </div>
  );
});

export default ControlPanel;
