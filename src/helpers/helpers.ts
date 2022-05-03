import { Record } from '../types/types'

export const getLocalStoreRecords = () => {
  const localStore = localStorage.getItem('records')

  if(localStore) {
    return JSON.parse(localStore)
  }

  return []
}

export const setLocalStoreRecords = (records: Record[]) => {
  localStorage.setItem('records', JSON.stringify(records))
}

export const initState = () => ({title: '', body: '', id: ''})