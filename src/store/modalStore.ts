import { makeAutoObservable } from 'mobx';

export type ModalMode = 'edit' | 'create';
export type Status = 0 | 1 | 2;
export type Priority = 0 | 1 | 2 | 3;

class ModalStore {
  showModal: boolean = false;

  modalMode: ModalMode = 'create';

  constructor() {
    makeAutoObservable(this, {}, { deep: true });
  }

  setShowModal(value: boolean) {
    this.showModal = value;
  }

  setModalMode(mode: ModalMode) {
    this.modalMode = mode;
  }

  openEditModal() {
    this.modalMode = 'edit';
    this.showModal = true;
  }

  openCreateModal() {
    this.modalMode = 'create';
    this.showModal = true;
  }
}

export default ModalStore;
