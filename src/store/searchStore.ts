import { makeAutoObservable } from 'mobx';

export type Status = 0 | 1 | 2;
export type Priority = 0 | 1 | 2 | 3;

class SearchparamsStore {
  status: Status = 0;

  priority: Priority = 0;

  search: string = '';

  constructor() {
    makeAutoObservable(this, {}, { deep: true });
  }

  setStatus(status: Status) {
    this.status = status;
  }

  setPriority(priority: Priority) {
    this.priority = priority;
  }

  setSearch(search: string) {
    this.search = search;
  }

  resetSearch() {
    this.search = '';
    this.priority = 0;
    this.status = 0;
  }
}

export default SearchparamsStore;
