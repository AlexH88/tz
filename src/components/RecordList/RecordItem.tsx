import { observer } from 'mobx-react'
import React from 'react'
import { recordStore } from '../../stores/recordStore'
import { Record } from '../../types/types'

interface Props {
    record: Record
}

const getHighlightedText = (text: string, higlight: string) => {
    var parts = text.split(new RegExp(`(${higlight})`, "gi"))
    return parts.map((part, index) => (
      <React.Fragment key={index}>
        {part.toLowerCase() === higlight.toLowerCase() ? (
          <b style={{ backgroundColor: "#e8bb49" }}>{part}</b>
        ) : (
          part
        )}
      </React.Fragment>
    ))
}

export const RecordItem = observer(({record}: Props) => {
    return (
        <div className='list-item'>
            <div className='list-item-ev' onClick={() => recordStore.editRecord(record.id)}>
                <div>{getHighlightedText(record.title, recordStore.filterString)}</div>
                <div>{getHighlightedText(record.body, recordStore.filterString)}</div>
            </div>
            <span className="close span-remove" onClick={() => recordStore.removeRecord(record.id)}> &times; </span>
        </div>
    )
})
