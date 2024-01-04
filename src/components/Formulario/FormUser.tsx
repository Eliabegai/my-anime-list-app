import { InputLabel } from "../InputLabel"

type FormUserPros = {
  name: string
  idade: string
  handleName: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleIdade: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const FormUser = ({ name, idade, handleName, handleIdade }:FormUserPros) => {


  return(
    <div className="flex flex-col w-96 h-auto justify-center items-center">
      <InputLabel value={name} typeInput='text' onChange={handleName} >Nome</InputLabel>
      <InputLabel value={idade} typeInput='number' onChange={handleIdade} >Idade</InputLabel>
    </div>
  )
}