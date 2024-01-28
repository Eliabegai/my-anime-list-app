import React from "react"

import { insert } from "../../service/photos";
import { Card } from "../../components/Card";
import { Modal } from "../../components/Modal";
import { useEffect, useState } from "react";
import { FormCadastroAnime } from "../../components/Formulario/FormCadastroAnime";
import { GetItensProps } from "../../types/listAnimesProps";
import { Button } from "../../components/Button";
import { InputLabel } from "../../components/InputLabel";
import { FiltersAnimeList } from "../../components/Filters";

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
  const [search, setSearch] = useState('')
  const urlAPI = process.env.REACT_APP_URL_API
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
    if(type === 'nameAnime') {}

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

  const getData = async (filter?:string) => {
    let newFilter = ''
    if(filter) newFilter = filter

    await fetch(`${urlAPI}${newFilter}`).then(response =>{
      return response.json();
        }).then(data =>
           setItems(data)
        ).catch(e => alert(e))

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

    await fetch(`${urlAPI}`, {
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

    await fetch(`${urlAPI}${id}`, {
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
    
    const response = await fetch(`${urlAPI}${id}`);
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

  const handleSearch = (e:React.KeyboardEvent<HTMLInputElement>) => {

    if(e.key === 'Enter' && search !== '') {
      getData(`name/${search}`)
    } else {
      getData()
    }

  }

  const handlesetSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }


  return(
    <div className="flex w-auto h-screen">
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
      </div>

      <div className="flex flex-col w-auto h-screen bg-gray-800 text-white border overflow-scroll">

        <div>
          <FiltersAnimeList
            quantyItems={items?.count as number}
            getData={getData}
            handleSearch={handleSearch}
            search={search}
            handleOpen={handleOpen}
            handlesetSearch={handlesetSearch}
          />
        </div>

        <div className="2xl:flex 2xl:flex-wrap grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-rows-auto auto-cols-max justify-center items-center gap-4 p-4">
          {
            items &&
            items?.data?.map(i => (
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