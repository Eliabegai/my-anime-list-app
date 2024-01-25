import React, { useState } from "react";

import { CardProps } from "../../types/listAnimesProps";
import { Button } from "../Button";

export const Card = ({name, status, type, chapter, image, scans, newScans, id, handleButtonChangeAdd, handleButtonChangeRemove, handleChangeChapter }:CardProps) => {
  const [ value, setValue ] = useState(chapter || 0)

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(event.key)
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
            <p className="text-lg font-bold truncate overflow-hidden"> {name || 'Undefined'} </p>

                <button data-tooltip-target="tooltip-default" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default tooltip</button>

                <div id="tooltip-default" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Tooltip content
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div>

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
              type="number" 
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