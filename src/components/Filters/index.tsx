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
  return(
    <div className="flex flex-row justify-between mx-4 mt-4">
      <div className="flex justify-center items-center px-2 w-10 h-10 bg-gray-900 rounded-full animate-pulse">
        <span className="text-green-500 font-extralight">
          {quantyItems}
        </span>
      </div>

      <div className="flex flex-row gap-x-4">
        <Button
            onClick={() => getData()}
            size="default"
          >
            All
        </Button>
        <Button
            onClick={() => getData('status/lendo')}
            size="default"
          >
            Lendo
        </Button>
        <Button
            onClick={() => getData('status/vouLer')}
            size="default"
          >
            Vou Ler
        </Button>
        <Button
            onClick={() => getData('status/concluido')}
            size="default"
          >
            Concluído
        </Button>
        </div>
        <div className="flex p-1 w-96 justify-center">
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
        <Button
            onClick={handleOpen}
            size="default"
          >
            Cadastrar
        </Button>

    </div>
  )
}