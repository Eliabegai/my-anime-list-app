import React, { useState } from "react";

import { CardProps } from "../../types/listAnimesProps";
import { Button } from "../Button";
import { Tooltip } from "../Tolltip";

export const Card = ({name, status, type, chapter, image, newScans, _id, handleButtonChangeAdd, handleButtonChangeRemove, handleChangeChapter, disabled }:CardProps) => {
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
    <div 
    data-status= {disabled}
    className="box-content flex flex-col w-60 h-80 border-2 border-green-400 p-2 items-center data-[status=true]:border-gray-700"
    >
      
      <div data-status= {disabled} className="box-content max-w-40 max-h-44 p-2 data-[status=true]:opacity-40">
        <img src={image} alt={name} className="w-32 h-40"/>
      </div>
      
      <div data-status= {disabled} className="box-content flex flex-col w-56 h-auto ml-2 p-2 data-[status=true]:opacity-40">
        <span>
        <Tooltip label={name || 'Undefined'}>
          <p className="text-base font-semibold truncate overflow-hidden"> {name || 'Undefined'} </p>
        </Tooltip>
        </span>
        
        <span>
          <a 
            href={newScans?.url}
            data-disabled={disabled}
            className={`
            border-b border-cyan-400 
            text-cyan-400 text-sm 
            data-[disabled=true]:border-b-gray-500
            data-[disabled=true]:text-gray-500
            `} 
            target="_blank" 
            rel='noopener'
          >
            {newScans?.name} 
          </a>
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
              className={`
              w-20 text-center rounded 
              bg-transparent outline-none 
              border border-green-300 
              disabled:border-gray-700
              `}
              type="text" 
              value={value} 
              onChange={handleModifyChapter}
              onKeyDown={onKeyDown}
              placeholder="chapter" 
              disabled={disabled}
            />
          </span>

          <div className="flex justify-around">
            <Button disabled={disabled} onClick={handleButtonChangeRemove as () => void} size="small">-</Button>
            <Button disabled={disabled} onClick={handleButtonChangeAdd as () => void} size="small">+</Button>
          </div>

        </div>
      </div>
    </div>
  )
}