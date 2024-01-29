import React, { useState } from "react";

import { CardProps } from "../../types/listAnimesProps";
import { Button } from "../Button";
import { Tooltip } from "../Tolltip";

export const Card = ({name, status, type, chapter, image, newScans, _id, handleButtonChangeAdd, handleButtonChangeRemove, handleChangeChapter }:CardProps) => {
  const [ value, setValue ] = useState(chapter || '')

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key === 'Enter') {
      if(typeof handleChangeChapter === 'function')
      handleChangeChapter(value, _id as string)
    }
  }

  const handleModifyChapter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const changeValue = event.target.value
    setValue(changeValue)
  }


  return (
    <div className="box-content flex flex-col w-60 h-80 border-2 border-green-400 p-2 items-center">
      
      <div className="box-content max-w-40 max-h-44 p-2">
        <img src={image} alt={name} className="w-32 h-40"/>
      </div>
      
      <div className="box-content flex flex-col w-56 h-auto ml-2 p-2">

        <span>
        <Tooltip label={name || 'Undefined'}>
          <p className="text-base font-semibold truncate overflow-hidden"> {name || 'Undefined'} </p>
        </Tooltip>
        </span>
        
        <span>
          <a href={newScans?.url} className="border-b border-cyan-400 text-cyan-400 text-sm" target="_blank" rel='noopener' >{newScans?.name} </a>
        </span>

        <span className="text-sm">
          Status: {status}
        </span>

        <span className="text-sm">
          Type: {type}
        </span>
        <div className="box-content flex flex-row gap-x-1">
          <span className="text-sm">
            Chapter:
          </span>
          <span className="text-base">
            <input 
              className="outline-none border border-green-300 text-center rounded w-20 bg-transparent" 
              type="text" 
              value={value} 
              onChange={handleModifyChapter}
              onKeyDown={onKeyDown}
              placeholder="chapter" 
            />
          </span>

          <div className="flex justify-around">
            <Button onClick={handleButtonChangeRemove as () => void} size="small">-</Button>
            <Button onClick={handleButtonChangeAdd as () => void} size="small">+</Button>
          </div>

        </div>

      </div>
    </div>
  )
}