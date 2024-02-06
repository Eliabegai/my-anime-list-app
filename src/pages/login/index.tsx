import { Navbar } from "../../components/Navbar"
import { useState } from "react"

import imageDragon from '../../img/dragon.png'


export const Login= () => {

  const urlAPI = process.env.REACT_APP_URL_API

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')




  const handleSubmit = async (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()

    const login = {
      username: username,
      password: password
    }

    await fetch(`${urlAPI}/auth/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(login),
    })
      .then(async (response) => {
        let resposta = await response.json()
        localStorage.setItem("keyPermissionAnime", await resposta?.access_token)
        console.log(resposta.access_token)
      })
  };

  return(
    <div className="flex flex-col">
      <Navbar />

      <div className="container flex flex-col w-full h-screen mx-auto bg-gray-800 text-white justify-center items-center border border-green-800 p-4 overflow-auto">
        
        <div className="container flex w-auto border rounded-3xl h-auto items-center justify-center p-16">
          <div className="flex-1 w-auto bg-white border rounded-full border-green-600 mr-10 max-sm:hidden">
            <img className="flex p-6 w-56 h-5w-56 " src={imageDragon} alt="Dragon" />
          </div>
          <form>
            <div className="container flex flex-col mx-auto p-4">

              <div className="relative flex flex-col my-5">
                <input 
                  className={`
                    w-full h-14 text-base bg-transparent px-5 py-5 border rounded-3xl placeholder-transparent border-green-500
                    group
                  `} 
                  type="text" 
                  placeholder="Username"
                  value={username}
                  onChange={event => setUsername(event.target.value)}
                />
                {/* <label className="absolute top-4 left-6 group-focus:-top-3">Username</label> */}
              </div>

              <div className="relative flex flex-col my-5">
                <input 
                  className={`
                    w-full h-14 text-base bg-transparent px-5 py-5 border rounded-3xl placeholder-transparent border-green-500
                    group
                  `} 
                  type="password" 
                  placeholder="Password"
                  value={password}
                  onChange={event => setPassword(event.target.value)}
                />
                {/* <label className="absolute top-4 left-6 group-[]:">Password</label> */}
              </div>

            </div>
            <div className="flex justify-between text-sm mb-4">
              <div className="">
                <input type="checkbox"/>
                <label>Remember me</label>
              </div>

              <div className="forgot">
                <a href="#">Forgot password?</a>
              </div>
            </div> 

            <button 
              className="w-full h-14 bg-green-700 text-2xl font-medium border-none rounded-3xl cursor-pointer transition hover:bg-green-600 " 
              type="submit" 
              value='Submint'
              onClick={event => handleSubmit(event)}
              >
                Submit
            </button>

            <div className="text-center mt-10">
              <span>Don't have an account? <a className="font-medium" href="#">Register</a></span>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}