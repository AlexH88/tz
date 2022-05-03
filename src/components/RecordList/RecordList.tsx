import React from 'react'
import { RecordItem } from "./RecordItem"
import { recordStore } from '../../stores/recordStore'
import { observer } from 'mobx-react'
import './RecordList.css'
import { Record } from '../../types/types'

export const RecordList = observer(()=> {
    return (        
        recordStore.list.length ?
        <div className="list">
            {recordStore.list.map((record: Record) => <RecordItem key={`${record.id}-${record.title}-${record.body}`} record={record}/>)}
        </div> :
        null
    )
})
