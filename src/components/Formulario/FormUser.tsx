import { useState } from "react"
import { InputLabel } from "../InputLabel"
import { setId } from "@material-tailwind/react/components/Tabs/TabsContext"
import { handleSubmitProps } from "../../App"

type FormUserPros = {
  name: string
  idade: string
  handleName: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleIdade: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit?: ({ name, idade }:handleSubmitProps) => void
}

export const FormUser = ({ name, idade, handleName, handleIdade, handleSubmit }:FormUserPros) => {


  return(
    <div className="flex flex-col w-96 h-auto justify-center items-center">
      <InputLabel value={name} typeInput='text' onChange={handleName} >Nome</InputLabel>
      <InputLabel value={idade} typeInput='number' onChange={handleIdade} >Idade</InputLabel>
    </div>
  )
}