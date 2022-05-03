import { observer } from 'mobx-react'
import React, {useEffect, useState} from 'react'
import { modalStore } from '../../stores/modalStore'
import { recordStore } from '../../stores/recordStore'
import './RecordForm.css'
import { initState } from '../../helpers/helpers'

export const RecordForm = observer(() => {
    const [record, setRecord] = useState(initState())

    useEffect(() => {
        setRecord({
            id: recordStore.selectedRecord.id,
            title: recordStore.selectedRecord.title,
            body: recordStore.selectedRecord.body,
        })
    }, [recordStore.selectedRecord])

    const saveRecord = () => {
        recordStore.saveRecord(record)
        setRecord(initState)
        modalStore.changeModal()
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const { name, value } = e.target
        setRecord((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="add-form">
            <label htmlFor="title">Заголовок</label>
            <input 
                id="title"
                name="title"
                type="text"
                value={record.title}
                onChange={(e) => handleChange(e)}
            />
            <label htmlFor="body">Описание</label>
            <textarea
                id="body"
                name="body"
                value={record.body}
                onChange={(e) => handleChange(e)}
            />
            <button onClick={saveRecord}>Сохранить</button>
        </div>
    )
})
