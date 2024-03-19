type ScanProps = {
  name?: string
  url?: string
}

export type CardProps = {
  _id?: string
  name?: string
  image?: string
  type?: 'manga' | 'manhua' | 'manhwa' | 'novel' | string
  chapter?: string
  status?: 'Lendo' | 'Vou Ler' | 'Concluído' | string
  scans?: ScanProps[]
  newScans?: {
    name?: string
    url?: string
  }
  handleButtonChangeAdd?: () => void
  handleButtonChangeRemove?: () => void
  handleChangeChapter?: (value: string, id: string) => void
  disabled?: boolean
}

export type Photo = {
  name: string
  url: string
} 

export type GetItensProps = {
  chapter?: string
  _id?: string
  imageUrl?: string
  name?: string
  scan?: {
    name?: string
    url?: string
  }
  status?: string
  type?: string
}

export type getItemsById = {
  data: GetItensProps,
  count: number
}