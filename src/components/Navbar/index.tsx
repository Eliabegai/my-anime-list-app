import React, { useEffect, useState } from "react"
import { jwtDecode } from "jwt-decode"
import { Link, useSearchParams } from "react-router-dom"
import ImageDragon from '../../img/dragon.png'
import { Avatar } from "../Avatar"
import { useCookies } from "react-cookie"

type TokenProps = {
  payload: {
    rule: string
    status: string
    name: string
    username: string
  }
  exp: number
  iat: number
}

export const Navbar = () => {

  const [name, setName] = useState('')
  const permissionToken:string | null= localStorage.getItem("keyPermissionAnime")
  const [cookies, setCookies, removeCookies] = useCookies(["key_user_token", "key_user_refresh_token"])

  useEffect(() => {
    if(cookies.key_user_token){
      const decoded = jwtDecode<TokenProps>(cookies?.key_user_token)
      setName(decoded?.payload.name)
    }
  },[])

  function handleLogout() {
    // localStorage.clear()
    setCookies("key_user_token", "")
    setCookies("key_user_refresh_token", "")

  }


  return(
    <nav className="flex flex-row container mx-auto items-center justify-center bg-gray-900">
      <div className="w-full flex items-center justify-between mx-auto p-1">
        <Link to={`/`} className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={ImageDragon} alt="logo dragon" className="w-10 h-10 bg-white rounded-full" />
          <span className="self-center text-xl font-semibold text-white">My Anime List</span>
        </Link>

        {
          cookies.key_user_token &&

            <div className="flex flex-1 flex-row justify-center items-center">
                <div className="mr-4">
                  <Avatar image={false} label={name} />
                </div>
                <span className="text-white text-center text-xl">Bem-vindo <strong className="text-2xl ml-2">{name}!</strong></span>
            </div>

        }


        <div className="flex w-auto items-center justify-center" id="navbar-dropdown">
          <ul className="flex flex-row font-medium mt-4 rounded-lg space-x-4">
            <li>
              <Link 
                to={`/animes`} 
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
            <li>
              <Link 
                to={`/login`}
                onClick={handleLogout}
                className={`
                  flex items-center justify-center
                  w-auto h-6 text-sm p-3 text-white 
                  border-2 rounded-lg border-green-500 
                  data-[type=bold]:font-bold 
                  hover:bg-green-700 
                  active:bg-blue-700
                `}
                >
                  {
                    cookies.key_user_token ? "Logout" : "Login"
                  }
                </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

