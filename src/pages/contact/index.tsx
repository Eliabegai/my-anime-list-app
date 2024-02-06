import React from "react"
import { Navbar } from "../../components/Navbar"

export const Contact = () => {
  return(
    <div>
      <Navbar />
      <div className="container flex flex-col w-full h-screen mx-auto bg-gray-800 text-white justify-center items-center border border-green-800 p-4 overflow-auto">
        <h1>Hello World</h1>
        <p>Contact</p>
      </div>

    </div>
  )
}