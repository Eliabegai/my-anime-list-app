import { useEffect, useState } from "react"
import { InputLabel } from "../InputLabel"
import { InputSelect } from "../InputSelect"

type FormCadastroProps = {
  nameAnime: string
  optionsType: { value: string, label: string}[]
  chapterAnime: number
  optionsStatus: { value: string, label: string}[]
  scanAnime: string
  scanUrlAnime: string
  handleChange: (event: React.ChangeEvent, type:string) => void
  handleChooseSelect: (event: React.ChangeEvent, type:string) => void
  handleSaveFile: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const FormCadastroAnime = ({ nameAnime, optionsType, optionsStatus, chapterAnime, scanAnime, scanUrlAnime, handleChange, handleChooseSelect, handleSaveFile }:FormCadastroProps) => {

  return(
    <div className="flex flex-col gap-y-6">
      <InputLabel onChange={e => handleChange(e, 'nameAnime')} value={nameAnime} >Nome Anime</InputLabel>
      <InputSelect options={optionsType} onChange={e => handleChooseSelect(e, 'type')} title={'Type'} />
      <InputLabel onChange={e => handleChange(e, 'chapterAnime')} typeInput="number" value={chapterAnime} >Chapter</InputLabel>
      <InputSelect options={optionsStatus} onChange={e => handleChooseSelect(e, 'status')} title={'Status'} />
      <InputLabel onChange={e => handleChange(e, 'scanAnime')} value={scanAnime} >Scan</InputLabel>
      <InputLabel onChange={e => handleChange(e, 'scanUrlAnime')} value={scanUrlAnime} >Url</InputLabel>
      <input type="file" className="text-white" placeholder="insert" onChange={(e) => handleSaveFile(e)} />
    </div>
  )
}