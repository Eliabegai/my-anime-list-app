type ScanProps = {
  name?: string
  url?: string
}

export type CardProps = {
  id?: number
  name?: string
  image?: string
  type?: 'manga' | 'manhua' | 'manhwa' | 'novel' | string
  chapter?: number
  status?: 'Lendo' | 'Vou Ler' | 'Concluído' | string
  scans?: ScanProps[]
  newScans?: {
    name: string
    url: string
  }
  handleButtonChangeAdd?: () => void
  handleButtonChangeRemove?: () => void
  handleChangeChapter?: (value: number, id: number) => void
}

export type Photo = {
  name: string
  url: string
} 

export type GetItensProps = {
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