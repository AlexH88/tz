import { observer } from 'mobx-react'
import React, { useState } from 'react'
import './App.css'
import { Modal } from './components/Modal/Modal'
import { RecordList } from './components/RecordList/RecordList'
import { RecordForm } from './components/RecordForm/RecordForm'
import { modalStore } from './stores/modalStore'
import { recordStore } from './stores/recordStore'


const App = observer(()=> {
    const [filter, setFilter] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setFilter(value)
        recordStore.filterRecord(value)
    }

    return (
        <div className="App">
            <button onClick={() => {modalStore.changeModal()}}>Добавить запись</button>
            <br/>
            <label htmlFor="filter">Фильтр </label>
            <input 
                id="filter"
                name="filter"
                type="text"
                value={filter}
                onChange={(e) => handleChange(e)}
            />

            <RecordList/>

            <Modal 
                show={modalStore.show}
                handleClose={() => {
                    modalStore.changeModal()
                    recordStore.clear()
                }}
            >
                <RecordForm/>
            </Modal>
        </div>
    );
})

export default App;
