import { makeAutoObservable, observable, toJS } from "mobx"
import { modalStore } from "./modalStore"
import { Record } from '../types/types'
import { getLocalStoreRecords, setLocalStoreRecords } from "../helpers/helpers"
import { initState } from '../helpers/helpers'

class RecordStore {
  record: Record = initState()
  list: Record[] = getLocalStoreRecords()
  selectedRecord: Record = initState()
  filterString: string = ''

  constructor() {
    makeAutoObservable(this, {
      list: observable,
      record: observable,
      selectedRecord:observable
    })
  }

  saveRecord = (record: Record) => {
      if(record.id) {
        const newList = this.list.map(item => {
          if(item.id === record.id) {
            return record
          }
          return item
        })
        this.list = newList
      } else {
        record.id = Date.now().toString()
        this.list.push(record)
      }
      setLocalStoreRecords(this.list)
  }

  editRecord = (id: string) => {
    modalStore.changeModal()
    this.selectedRecord = this.list.find((item: Record) => item.id === id) || initState()
  }

  removeRecord = (id: string) => {
      const index = this.list.findIndex(item => item.id === id)
      this.list.splice(index, 1)
      setLocalStoreRecords(this.list)
  }

  filterRecord = (filterStr: string) => {
    if(filterStr) {
      this.filterString = filterStr
      this.list = getLocalStoreRecords().filter((item: Record) => {
        const temp = item.title.toLowerCase() + item.body.toLowerCase()
        return temp.includes(filterStr.toLowerCase())
      })
    } else {
      this.list = getLocalStoreRecords()
      this.filterString = ''
    }    
  }

  clear = () => {
    this.selectedRecord = initState()
  }

}

export const recordStore = new RecordStore()