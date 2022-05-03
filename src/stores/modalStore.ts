import { makeAutoObservable } from "mobx"

class ModalStore {
  show = false
  constructor() {
    makeAutoObservable(this)
  }

  changeModal() {
    this.show = !this.show
  }
}

export const modalStore = new ModalStore()