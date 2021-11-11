import styles from './controlpanes.module.scss';
import Select from '@/components/Select';
import Button from '@/components/Button';
import TextInput from '@/components/TextInput';
import { FaTimes } from 'react-icons/fa';

import { priorities, statuses } from '@/data/index';

import { StoresContext } from '@/context/index';
import { useContext } from 'react';
import { Priority, Status } from '@/store/searchStore';
import { observer } from 'mobx-react-lite';

const ControlPanel: React.FC = observer(() => {
  const { searchStore } = useContext(StoresContext);
  return (
    <div className={styles.control__panel}>
      <TextInput
        value={searchStore.search}
        onChange={(e) => searchStore.setSearch(e.target.value)}
        placeholder='search...'
        maxLength={10}
      />

      <div className={styles.select}>
        <p>Show by status: </p>
        <Select
          onChange={(e) => searchStore.setStatus(+e.target.value as Status)}
          value={searchStore.status}
        >
          {statuses.map(({ value, text }) => (
            <option key={value} value={value}>
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
          {priorities.map(({ value, text }) => (
            <option key={value} value={value}>
              {text}
            </option>
          ))}
        </Select>
      </div>
      <Button children='Create' />
      <Button danger>
        <p className={styles.clear__all}>
          <span>Delete all</span>
          <FaTimes />
        </p>
      </Button>
    </div>
  );
});

export default ControlPanel;
