import { Header } from "./components/Header";
import { insert } from "./service/photos";
import { Card } from "./components/Card";
import { Modal } from "./components/Modal";
import { useEffect, useState } from "react";
import { FormCadastroAnime } from "./components/Formulario/FormCadastroAnime";
import { GetItensProps } from "./types/listAnimesProps";


export default function App() {

  const [open, setOpen] = useState(false);
  const [nameAnime, setNameAnime] = useState('')
  const [typeAnime, setTypeAnime] = useState('')
  const [chapterAnime, setChapterAnime] = useState(0)
  const [statusAnime, setStatusAnime] = useState('')
  const [scanAnime, setScanAnime] = useState('')
  const [scanUrlAnime, setScanUrlAnime] = useState('')
  const [file, setFile] = useState<File>()
  const [items, setItems] = useState<GetItensProps[]>([])
  const [loading, setLoading] = useState(false)

  
  const handleOpen = () => setOpen(!open);

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
    setLoading(!loading)
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

    setLoading(true)

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
        setLoading(false)
      });
  }

  const handleSubmitCadastro = () => {
    handleCadastroManga()
  };

  const handleChangeChapter = async (id: number, type: string, value?: number) => {

    console.log(value)

    setLoading(true)
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

    handleSubmitUpdate(newData, id)
  }

  return (
    <div>
      <Header />

      <div>
        <div className="flex bg-gray-600 justify-center items-center p-4">
          <button className="w-52 h-20 border-2 border-green-500 text-cyan-500 text-3xl" onClick={handleOpen}>New Item</button>
        </div>

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

        {
          loading &&
            <div>
              <Modal
              openModal={true}
              handleOpen={handleOpen}
              type={'info'}
              >
                Carregando...
              </Modal>
            </div>

        }

        <div className="flex w-full flex-wrap h-[95vh] bg-gray-800 text-white justify-center items-center border-2 border-green-200 gap-1 overflow-auto p-2">
          {
            items &&
            items.map(i => (
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
                handleChangeChapter={() => handleChangeChapter(i.id, 'change')}
              />
            ))
          }
        </div>

      </div>
    </div>
  );
}