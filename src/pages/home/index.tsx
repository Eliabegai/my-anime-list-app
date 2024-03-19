import React from "react"

import { insert } from "../../service/photos";
import { Card } from "../../components/Card";
import { Modal } from "../../components/Modal";
import { useEffect, useState } from "react";
import { FormCadastroAnime } from "../../components/Formulario/FormCadastroAnime";
import { GetItensProps } from "../../types/listAnimesProps";
import { FiltersAnimeList } from "../../components/Filters";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { useCookies } from "react-cookie";

export const Home = () => {
  const navigate = useNavigate()

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
  const [loading, setLoading] = useState(false)
  const [ open, setOpen ] = useState(false);
  const handleOpen = () => setOpen(!open);
  const permissionToken = localStorage.getItem("keyPermissionAnime")
  const [cookies, setCookies, removeCookies] = useCookies(["key_user_token", "key_user_refresh_token"])

  // const array = Array.from({length: 10}, (_, i) => ({
  //   _id: `US${i}`,
  //   name: `User${i}`,
  //   imageUrl: `https://picsum.photos/seed/${i}/200/200`,
  //   scan: {
  //     name: 'Ler manga',
  //     url: 'https://lermanga.org/'
  //   },
  //   chapter: (i+1).toString(),
  //   status: i % 2 === 0 ? 'lendo' : 'concluido',
  //   type: 'Manga'
  // }))

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

    if(cookies.key_user_token === null){
      navigate("/login")
    }

    try{
      await fetch(`${urlAPI}/animes/${newFilter}`,{
        method: "GET",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${cookies.key_user_token}`
        }
      }).then(response =>{
        return response.json();
          }).then(data =>
             setItems(data)
          ).then(() => setLoading(false))
    } catch {
      alert('Não autorizado')
    }
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

    try{
      await fetch(`${urlAPI}/animes`, {
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
    } catch {
      alert('Falha ao Cadastrar')
    }
  }

  const handleSubmitUpdate = async (data:GetItensProps, id:string) => {

    setLoading(true)

    try{
      await fetch(`${urlAPI}/animes/${id}`, {
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
    } catch {
      alert('Houve um erro, Desculpe!')
      setLoading(false);
    }
  }

  const handleSubmitCadastro = () => {
    handleCadastroManga()
  };
  
  const handleChangeChapter = async (id?: string, type?: string, value?: string) => {
    const getChapter = await fetch(`${urlAPI}/animes/${id}`).then(response => {
        return response.json()
      }).then(item => 
        {return item?.data.chapter}
        )
    
    let newChapter = parseFloat(getChapter)

    if(type === 'add') {
      newChapter = newChapter + 1
    } 
    if(type === 'remove') {
      newChapter = newChapter - 1
    }
    if (type === 'change') {
      if(typeof value === 'string'){
        newChapter = +value
      }
    }

    const chapter = newChapter.toString()
    
    const newData = {
      "chapter": chapter,
    }

    handleSubmitUpdate(newData, id as string)
  }

  const handleModifyChapter = (value:string, id: string) => {
    handleChangeChapter(id, 'change', value)
  }

  const handleSearch = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter' && search !== '') {
      getData(`name/${search}`)
    } else {
      if(search === '')
        getData()
    }

  }

  const handlesetSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }


  return(
    <div className="flex flex-col w-full h-auto mx-auto container overflow-auto">
      <Navbar />
      
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

      <div className="flex flex-col text-white">

        <div className="bg-gray-900 border-t border-gray-600">
          <FiltersAnimeList
            quantyItems={items?.count as number}
            getData={getData}
            handleSearch={handleSearch}
            search={search}
            handleOpen={handleOpen}
            handlesetSearch={handlesetSearch}
          />
        </div>

        <Modal
          openModal={loading}
          message={true}
        >
          {loading && <p className="text-white animate-bounce">Carregando...</p>}
        </Modal>

        <div className="flex flex-wrap w-full h-[100vh] justify-center items-center gap-4 p-4 bg-gray-800 overflow-auto">
          {
            items && !loading &&
            items?.data?.map(i => (
              <Card
                key={i._id}
                _id={i._id}
                name={i.name}
                chapter={i.chapter}
                status={i.status}
                image={i.imageUrl}
                type={i.type}
                newScans={i?.scan}
                handleButtonChangeAdd={() => handleChangeChapter(i._id, 'add')}
                handleButtonChangeRemove={() => handleChangeChapter(i._id, 'remove')}
                handleChangeChapter={handleModifyChapter}
              />
            ))
          }

          {/* {
            array &&
            array?.map(i => (
              <Card
                key={i._id}
                _id={i._id}
                name={i.name}
                chapter={i.chapter}
                status={i.status}
                image={i.imageUrl}
                type={i.type}
                newScans={i?.scan}
                handleButtonChangeAdd={() => handleChangeChapter(i._id, 'add')}
                handleButtonChangeRemove={() => handleChangeChapter(i._id, 'remove')}
                handleChangeChapter={handleModifyChapter}
                disabled={i.status === 'lendo'}
              />
            ))
          } */}

        </div>
      </div>
    </div>
  )
}