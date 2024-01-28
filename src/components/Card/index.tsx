import React, { useState } from "react";

import { CardProps } from "../../types/listAnimesProps";
import { Button } from "../Button";
import { Tooltip } from "../Tolltip";

export const Card = ({name, status, type, chapter, image, scans, newScans, id, handleButtonChangeAdd, handleButtonChangeRemove, handleChangeChapter }:CardProps) => {
  const [ value, setValue ] = useState(chapter || 0)

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key === 'Enter') {
      if(typeof handleChangeChapter === 'function')
      handleChangeChapter(value, id as number)
    }
  }

  const handleModifyChapter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseFloat(event.target.value))
  }

  return (
    <div className="border-2 border-green-400 flex flex-wrap w-80 p-2 items-center">
      <img src={image} alt={name} className="w-32 h-40"/>
      <div className="ml-4">
        <ul>
          <li className="w-36">
            <Tooltip label={name || 'Undefined'}>
              <p className="text-lg font-bold truncate overflow-hidden"> {name || 'Undefined'} </p>
            </Tooltip>
          </li>
          <li>
            <a href={newScans?.url} className="border-b-2 border-cyan-400 text-cyan-400" target="_blank" rel='noopener' >{newScans?.name} </a>
          </li>
          <li>
            Status: {status}
          </li>
          <li>
            Type: {type}
          </li>
          <li>
            Chapter:
            <span className="flex justify-center items-centers">
              <input 
              className="outline-none border-2 border-green-600 rounded w-24 flex justify-center items-center bg-transparent text-center" 
              type="text" 
              value={value} 
              onChange={handleModifyChapter}
              onKeyDown={onKeyDown}
              placeholder="chapter" 
              />
            </span>
          </li>
        </ul>
        <div className="flex justify-around">
          <Button onClick={handleButtonChangeRemove as () => void} size="small">-</Button>
          <Button onClick={handleButtonChangeAdd as () => void} size="small">+</Button>
        </div>
      </div>
    </div>
  )
}