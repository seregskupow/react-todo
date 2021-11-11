import ModalStore from './modalStore';
import SearchparamsStore from './searchStore';
import TodoStore from './todoStore';

export const rootStore = {
  searchStore: new SearchparamsStore(),
  modalStore: new ModalStore(),
  todoStore: new TodoStore(),
};
