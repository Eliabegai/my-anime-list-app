import { Button } from "../Button"
import { InputLabel } from "../InputLabel"


type FilterAnimeListProps = {
  quantyItems: number
  getData: (filter?: string) => void
  search: string
  handleSearch:(e:React.KeyboardEvent<HTMLInputElement>) => void
  handleOpen: () => void
  handlesetSearch: (e:React.ChangeEvent<HTMLInputElement>) => void
}

export const FiltersAnimeList = ({ quantyItems, getData, handleSearch, search, handleOpen, handlesetSearch }: FilterAnimeListProps) => {

  const dragonShield = '../../img/dragon-shield.jpg'

  const handleChangeStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {

    let status = e.target.value
    if(status === "")
      return
    
    switch(status) {
      case 'lendo':
        getData('status/lendo');
        break
      case 'vouLer':
        getData('status/vouLer');
        break
      case 'concluido':
        getData('status/concluido');
        break
      default:
        getData();
    }
  }

  return(
    <div className="container mx-auto flex flex-row w-auto items-center justify-between p-2 gap-2">

      <div className="flex justify-center items-center px-2 w-10 h-10 bg-gray-900 rounded-full animate-pulse">
        <span className="text-green-500 font-extralight">
          {quantyItems}
        </span>
      </div>

      <div className="flex-1 p-1 max-w-96 justify-center">
        <InputLabel
          onChange={e => handlesetSearch(e)}
          value={search}
          onKeyDown={handleSearch}
          typeInput="text"
          model='search'
        >
          Search
        </InputLabel>
      </div> 

      <div>
        <select 
          title="Status" 
          name="status" 
          id="status" 
          className="flex-1 w-28 rounded-md bg-gray-700 border border-green-500 p-3 text-sm"
          onChange={e => handleChangeStatus(e)}
        >
          <option value="todos">Todos</option>
          <option value="lendo">Lendo</option>
          <option value="vouLer">Vou Ler</option>
          <option value="concluido">Concluído</option>
        </select>
      </div>   

      <Button
          onClick={handleOpen}
          size="default"
        >
          Cadastrar
      </Button>

    </div>
  )
}