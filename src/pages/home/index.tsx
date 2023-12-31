import React from "react"

import { insert } from "../../service/photos";
import { Card } from "../../components/Card";
import { Modal } from "../../components/Modal";
import { useEffect, useState } from "react";
import { FormCadastroAnime } from "../../components/Formulario/FormCadastroAnime";
import { GetItensProps } from "../../types/listAnimesProps";
import { Button } from "../../components/Button";

type HomeProps = {
  handleOpen: () => void
  open: boolean
}

export const Home = ({ handleOpen, open }:HomeProps) => {

  const [nameAnime, setNameAnime] = useState('')
  const [typeAnime, setTypeAnime] = useState('')
  const [chapterAnime, setChapterAnime] = useState(0)
  const [statusAnime, setStatusAnime] = useState('')
  const [scanAnime, setScanAnime] = useState('')
  const [scanUrlAnime, setScanUrlAnime] = useState('')
  const [file, setFile] = useState<File>()
  const [items, setItems] = useState<{data: GetItensProps[], count: number}>()
  
  useEffect(() => {
    getData()
  },[])

  const clearForm = () => {
    handleOpen()
    setNameAnime('')
    setTypeAnime('')
    setChapterAnime(0)
    setStatusAnime('')
    setScanAnime('')
    setScanUrlAnime('')
  }

  const optionsStatus = [
    {
      label: 'Lendo',
      value: 'lendo'
    },
    {
      label: 'Vou Ler',
      value: 'vouLer'
    },
    {
      label: 'Concluído',
      value: 'concluido'
    },
  ]

  const optionsType = [
    {
      label: 'Mangá',
      value: 'Manga'
    },
    {
      label: 'Manhua',
      value: 'Manhua'
    },
    {
      label: 'Manhwa',
      value: 'Manhwa'
    },
    {
      label: 'Novel',
      value: 'Novel'
    },
  ]

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, type:string) => {
    event.preventDefault()
    if(type === 'nameAnime') {
    }
    switch(type) {
      case 'nameAnime':
        setNameAnime(event.target.value);
        break
      case 'chapterAnime':
        setChapterAnime(parseFloat(event.target.value));
        break
      case 'scanAnime':
        setScanAnime(event.target.value);
        break
      case 'scanUrlAnime':
        setScanUrlAnime(event.target.value);
        break
      default:
        alert('Inválido')
    }
  }


  const handleChooseSelect = (event:React.ChangeEvent<HTMLSelectElement>, type:string) => 
  {
    event.preventDefault()
    switch(type) {
      case 'type':
        setTypeAnime(event.target.value)
        break
        case 'status':
        setStatusAnime(event.target.value)
        break
        default:
          alert('Deculpe, inválido')
    }
  }

  const handleSaveFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const arquivo = e.target.files?.[0]
    setFile(arquivo)
  }

  const getData = async () => {
    const response = await fetch("http://localhost:3000/animes");
    const data = await response.json();
    setItems(data);
  }

  const postImage = async () => {
    
    if(file && file.size > 0) {
      
      let result = await insert(file)

      if(result instanceof Error) {
        alert(`${result.name} - ${result.message}`)
      } else {
        let newUrl = result.url
        return newUrl
      }
    }
  }

  const handleCadastroManga = async () => {

    const url = await postImage()

    const data = {
      "name": nameAnime,
      "type": typeAnime,
      "chapter": chapterAnime,
      "status": statusAnime,
      "scan": {
        "name": scanAnime,
        "url": scanUrlAnime
      },
      "imageUrl": url
    }

    await fetch("http://localhost:3000/animes", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        clearForm()
      });
  }

  const handleSubmitUpdate = async (data:GetItensProps, id:number) => {

    await fetch(`http://localhost:3000/animes/${id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(() => {
        getData()
      });
  }

  const handleSubmitCadastro = () => {
    handleCadastroManga()
  };

  const handleChangeChapter = async (id?: number, type?: string, value?: number) => {

    let newValue
    
    const response = await fetch(`http://localhost:3000/animes/${id}`);
    const data:GetItensProps = await response.json();
    if(type === 'add') {
      newValue = data?.chapter + 1
    } 
    if(type === 'remove') {
      newValue = data?.chapter - 1
    }
    if (type === 'change') {
      newValue = value
    }
    
    const newData = {
      "id": id,
      "name": data?.name,
      "type": data.type,
      "chapter": newValue,
      "status": data?.status,
      "scan": {
        "name": data?.scan.name,
        "url": data?.scan.url
      },
      "imageUrl": data?.imageUrl
    } as GetItensProps

    handleSubmitUpdate(newData, id as number)
  }

  const handleModifyChapter = (value:number, id: number) => {
    handleChangeChapter(id, 'change', value)
  }


  return(
    <div>
        <Modal
          handleOpen={handleOpen}
          onConfirm={handleSubmitCadastro}
          openModal={open}
        >
          <div>
            <FormCadastroAnime
              nameAnime={nameAnime}
              optionsType={optionsType}
              optionsStatus={optionsStatus}
              chapterAnime={chapterAnime}
              scanAnime={scanAnime}
              scanUrlAnime={scanUrlAnime}
              handleChange={handleChange as () => void}
              handleChooseSelect={handleChooseSelect as () => void}
              handleSaveFile={handleSaveFile}
            />
          </div>
        </Modal>

        <div className="flex flex-col w-auto h-[99vh] bg-gray-800 text-white border-2 border-green-200">
          <div className="flex flex-row justify-between mx-4 mt-4">
            <div className="flex justify-center items-center px-2 w-10 h-10 bg-gray-900 rounded-full animate-pulse">
              <span className="text-green-500 font-extralight">
                {items?.count}
              </span>
            </div>
            <Button
                onClick={handleOpen}
                size="default"
              >
                <span className="">Cadastrar</span>
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-4 p-4 overflow-auto">
            {
              items &&
              items?.data.map(i => (
                <Card
                  key={i.id}
                  id={i.id}
                  name={i.name}
                  chapter={i.chapter}
                  status={i.status}
                  image={i.imageUrl}
                  type={i.type}
                  newScans={i.scan}
                  handleButtonChangeAdd={() => handleChangeChapter(i.id, 'add')}
                  handleButtonChangeRemove={() => handleChangeChapter(i.id, 'remove')}
                  handleChangeChapter={handleModifyChapter}
                />
              ))
            }
          </div>
        </div>
    </div>
  )
}