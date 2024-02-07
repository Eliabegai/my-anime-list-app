import React from "react"
import { Navbar } from "../../components/Navbar"
import { useState } from "react"

import imageDragon from "../../img/dragon.png"
import { Input } from "../../components/Input"
import { Modal } from "../../components/Modal"
import { useNavigate } from "react-router-dom"


export const Login= () => {

  const navigate = useNavigate()

  const urlAPI = process.env.REACT_APP_URL_API

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    setLoading(true)

    const login = {
      username: username,
      password: password
    };

    await fetch(`${urlAPI}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    })
      .then(async (response) => {
        const resposta = await response.json()
        localStorage.setItem("keyPermissionAnime", await resposta?.access_token)
        setLoading(false)
      })
      .then(()=>{
        //navigate to /animes
        navigate('/animes')
      })
  }

  function handleChangePassword(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function handleChangeUsername(event: React.ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value);
  }

  return(
    <div className="flex flex-col">
      <Navbar />

      <div className="container flex flex-col w-full h-screen mx-auto bg-gray-800 text-white justify-center items-center border border-green-800 p-4 overflow-auto">

        <Modal
          openModal={loading}
          message={true}
        >
          {loading && <p className="text-white animate-bounce">Carregando...</p>}
        </Modal>
        
        <div className="container flex w-auto border rounded-3xl h-auto items-center justify-center p-16">
          <div className="flex-1 w-auto bg-white border rounded-full border-green-600 mr-10 max-sm:hidden">
            <img className="flex p-6 w-56 h-5w-56 " src={imageDragon} alt="Dragon" />
          </div>
          <form>
            <div className="container flex flex-col mx-auto p-4">

              <div className="relative flex flex-col my-5 group">
                <Input
                  label="Username"
                  dataValue={username === ""}
                  onChange={handleChangeUsername}
                  type="text"
                  value={username}
                />
              </div>

              <div className="relative flex flex-col my-5 group">
                <Input
                  label="Password"
                  dataValue={password === ""}
                  onChange={handleChangePassword}
                  type="password"
                  value={password}
                />
              </div>

            </div>

            <div className="flex justify-between text-sm mb-4">

              <div className="">
                <input type="checkbox" placeholder="check"/>
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