import React from "react"
import { Link } from "react-router-dom"
import ImageDragon from '../../img/dragon.png'

export const Navbar = () => {
  return(
    <nav className="bg-gray-900 flex flex-row items-center justify-center">
      <div className="w-full flex items-center justify-between mx-auto p-4">
        <Link to={`/`} className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={ImageDragon} alt="logo dragon" className="w-12 h-12 bg-white rounded-full" />
          <span className="self-center text-2xl font-semibold text-white">My Anime List</span>
        </Link>

        <div className="flex w-auto items-center justify-center" id="navbar-dropdown">
          <ul className="flex flex-row font-medium mt-4 rounded-lg space-x-4">
            <li>
              <Link 
                to={`/`} 
                className={`
                  flex items-center justify-center
                  w-auto h-6 text-sm p-3 text-white 
                  border-2 rounded-lg border-green-500 
                  data-[type=bold]:font-bold 
                  hover:bg-green-700 
                  active:bg-blue-700
                `}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to={`/contact`} 
                className={`
                  flex items-center justify-center
                  w-auto h-6 text-sm p-3 text-white 
                  border-2 rounded-lg border-green-500 
                  data-[type=bold]:font-bold 
                  hover:bg-green-700 
                  active:bg-blue-700
                `}
                >
                  Contact
                </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

