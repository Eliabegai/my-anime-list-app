import { Header } from "./components/Header";

import { listAnimes } from './anime-list'
import { Card } from "./components/Card";
import { Modal } from "./components/Modal";
import { useEffect, useState } from "react";
import { FormUser } from "./components/Formulario/FormUser";
import { FormCadastroAnime } from "./components/Formulario/FormCadastroAnime";

export type handleSubmitProps = {
  name: string
  idade: string
}

export default function App() {

  const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen(!open);

  const [name, setName] = useState('')
  const [idade, setIdade] = useState('')

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }
  const handleIdade = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIdade(event.target.value)
  }

  const clearForm = () => {
    handleOpen()
    setName('')
    setIdade('')
  }

  const handleSubmit = ({ name, idade }:handleSubmitProps) => {
    console.log('Click Button')
    
    const data = {
      "nome": name,
      "idade": idade
    }

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        clearForm()
      });

  }

  const handleClick = () => {
    const data = {
      "name": name,
      "idade": idade
    }

    handleSubmit(data)
  }

  const handleClickAnime = () => {
    console.log('click')
  }

  return (
    <div>
      <Header />
      <div>
        <div className="flex bg-gray-600 justify-center items-center p-4">
          <button className="w-52 h-20 border-2 border-green-500 text-cyan-500 text-3xl" onClick={handleOpen}>Open Modal</button>
        </div>

        {/* {
          open &&
            <Modal
            openModal={open}
            handleOpen={handleOpen}
            onClick={handleClick}
            >
              <FormUser
                name={name}
                idade={idade}
                handleIdade={handleIdade}
                handleName={handleName}
                handleSubmit={handleSubmit}
              />
            </Modal>
        } */}

        <Modal
          openModal={open}
          handleOpen={handleOpen}
          onClick={handleClickAnime}
        >
          <FormCadastroAnime />
        </Modal>

        <div className="flex w-full flex-wrap h-[95vh] bg-gray-800 text-white justify-center items-center border-2 border-green-200 gap-1 overflow-auto p-2">
        {
          listAnimes.map((i, index) => (
            <Card
              key={i.id}
              name={i.name}
              chapter={i.chapter}
              status={i.status}
              image={i.image}
              type={i.type}
              scans={i.scans}
            />
          ))
        }
        </div>

      </div>
    </div>
  );
}