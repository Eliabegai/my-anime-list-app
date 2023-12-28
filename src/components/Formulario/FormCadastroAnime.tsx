import { useEffect, useState } from "react"
import { InputLabel } from "../InputLabel"
import { InputSelect } from "../InputSelect"



export const FormCadastroAnime = () => {

  useEffect(() => {
    setNameAnime('')
    setTypeAnime('')
    setChapterAnime('')
    setStatusAnime('')
    setScanAnime('')
    setScanUrlAnime('')
  },[])

  const [nameAnime, setNameAnime] = useState('')
  const [typeAnime, setTypeAnime] = useState('')
  const [chapterAnime, setChapterAnime] = useState('')
  const [statusAnime, setStatusAnime] = useState('')
  const [scanAnime, setScanAnime] = useState('')
  const [scanUrlAnime, setScanUrlAnime] = useState('')


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
    
    if(type === 'nameAnime') {
    }
    
    switch(type) {
      case 'nameAnime':
        setNameAnime(event.target.value);
        break
      case 'chapterAnime':
        setChapterAnime(event.target.value);
        break
      case 'scanAnime':
        setScanAnime(event.target.value);
        break
      case 'scanUrlAnime':
        setScanUrlAnime(event.target.value);
        break
      default:
        alert('Deculpe, inválido')
    }
  }


  const handleChooseSelect = (event:React.ChangeEvent<HTMLSelectElement>, type:string) => {
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

  return(
    <div>
      <InputLabel onChange={e => handleChange(e, 'nameAnime')} value={nameAnime} >Nome Anime</InputLabel>
      <InputSelect options={optionsType} onChange={e => handleChooseSelect(e, 'type')} title={'Type'} />
      <InputLabel onChange={e => handleChange(e, 'chapterAnime')} typeInput="number" value={chapterAnime} >Chapter</InputLabel>
      <InputSelect options={optionsStatus} onChange={e => handleChooseSelect(e, 'status')} title={'Status'} />
      <InputLabel onChange={e => handleChange(e, 'scanAnime')} value={scanAnime} >Scan</InputLabel>
      <InputLabel onChange={e => handleChange(e, 'scanUrlAnime')} value={scanUrlAnime} >Url</InputLabel>
      <input type="file" className="text-white" placeholder="insert" />
    </div>
  )
}