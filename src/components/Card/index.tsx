import React, { useEffect, useState } from "react";

import { CardProps, GetItensProps } from "../../types/listAnimesProps";

export const Card = ({name, status, type, chapter, image, scans, newScans, id, handleButtonChangeAdd, handleButtonChangeRemove, handleChangeChapter }:CardProps) => {

  const [ value, setValue ] = useState(chapter || 0)

  const handleModifyChapter = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseFloat(event.target.value))
    handleChangeChapter(value)
  }

  return (
    <div className="border-2 border-green-400 flex flex-wrap w-80 p-2 items-center">
      <img src={image} alt={name} className="w-32 h-40"/>
      <div className="ml-4">
        <ul>
          <li className="w-36">
            <p className="text-lg font-bold truncate overflow-hidden"> {name || 'Undefined'} </p>
          </li>
          <li>
            {newScans ? 
            <a href={newScans.url} className="border-b-2 border-cyan-400 text-cyan-400" target="_blank" >{newScans.name} </a>
            :
            <a href={scans?.[0].url} className="border-b-2 border-cyan-400 text-cyan-400" target="_blank" >{scans?.[0].name} </a>
            
          }
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
              type="number" 
              value={value} 
              onChange={handleModifyChapter}
              placeholder="chapter" />
            </span>
          </li>
        </ul>
        <div className="flex justify-around">
          <button onClick={handleButtonChangeRemove} className="flex items-center justify-center text-2xl w-10 h-8 border-2 border-green-800 rounded-md">-</button>
          <button onClick={handleButtonChangeAdd} className="flex items-center justify-center text-2xl w-10 h-8 border-2 border-green-800 rounded-md">+</button>
        </div>
      </div>
    </div>
  )
}