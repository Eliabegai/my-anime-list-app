type ScanProps = {
  name?: string
  url?: string
}

export type CardProps = {
  id?: number | string
  name?: string
  image?: string
  type?: 'manga' | 'manhua' | 'manhwa' | 'novel' | string
  chapter?: number
  status?: 'Lendo' | 'Vou Ler' | 'Concluído' | string
  scans?: ScanProps[]
}