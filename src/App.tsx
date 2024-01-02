import { Header } from "./components/Header";
import { insert, getAll } from "./service/photos";

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

type GetItensProps = {
  chapter: number
  id: number
  imageUrl: string
  name : string
  scan: {
    name: string
    url: string
  }
  status : string
  type: string
}

export default function App() {

  const [open, setOpen] = useState(false);
  const [nameAnime, setNameAnime] = useState('')
  const [typeAnime, setTypeAnime] = useState('')
  const [chapterAnime, setChapterAnime] = useState(0)
  const [statusAnime, setStatusAnime] = useState('')
  const [scanAnime, setScanAnime] = useState('')
  const [scanUrlAnime, setScanUrlAnime] = useState('')
  const [file, setFile] = useState<File>()
  const [openImage, setOpenImage] = useState(false)
  const [items, setItems] = useState<GetItensProps[]>([])
  const [loading, setLoading] = useState(false)

  
  const handleOpen = () => setOpen(!open);
  const handleOpenImage = () => setOpenImage(!openImage)

  useEffect(() => {
    getData()
  },[loading])

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
    e.preventDefault()
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

  const handleClickAnime = async () => {

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

  const handleTeste = () => {
    handleClickAnime()
  };

  return (
    <div>
      <Header />

      <div>
        <div className="flex bg-gray-600 justify-center items-center p-4">
          <button className="w-52 h-20 border-2 border-green-500 text-cyan-500 text-3xl" onClick={handleOpen}>New Item</button>
        </div>

        <Modal
          handleOpen={handleOpen}
          onConfirm={handleTeste}
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

        <div className="flex w-full flex-wrap h-[95vh] bg-gray-800 text-white justify-center items-center border-2 border-green-200 gap-1 overflow-auto p-2">
          {
            items &&
            items.map(i => (
              <Card
                key={i.id}
                name={i.name}
                chapter={i.chapter}
                status={i.status}
                image={i.imageUrl}
                type={i.type}
                newScans={i.scan}
              />
            ))
          }
        </div>

      </div>
    </div>
  );
}