import React from "react";

import { listAnimes } from '../../anime-list'

import { CardProps } from "../../anime-list";


export const Card = ({name, status, type, chapter, image, scans}:CardProps) => {
  console.log(scans)

  return (
    <div className="border-2 border-green-400 flex flex-wrap w-72 p-2">
      <img src={image} alt={name} className="w-32 h-40"  />
      <div className="ml-4">
        <ul>
          <li>
            {name}
          </li>
          <li>
            <a href={scans?.[0].url} className="border-b-2 border-cyan-400 text-cyan-400">{scans?.[0].name}</a>
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
              value={chapter} 
              placeholder="chapter" />
            </span>
          </li>
        </ul>
        <div className="flex justify-around">
          <button className="flex items-center justify-center text-2xl w-10 h-8 border-2 border-green-800 rounded-md">-</button>
          <button className="flex items-center justify-center text-2xl w-10 h-8 border-2 border-green-800 rounded-md">+</button>
        </div>
      </div>
    </div>
  )
}