import eleceed from "../src/img/Eleceed.webp"
import arcaneSniper from "../src/img/arcane-sniper.jpg"
import martialPeak from "../src/img/martial-peak.jpg"
import overgeared from "../src/img/overgeared.webp"

type ScanProps = {
  name?: string
  url?: string
}

export type CardProps = {
  name?: string
  image?: string
  type?: 'manga' | 'manhua' | 'manhwa' | 'novel'
  chapter?: number | string
  status?: string
  scans?: ScanProps[]
}

export const listAnimes:CardProps[] = [
  {
    name: 'Eleceed',
    image: eleceed,
    type: 'manga',
    chapter: 275,
    status: 'Lendo',
    scans: [
      { 
        name: 'Gekkou Scans',
        url: 'https://gekkouscans.top/'
      },
      { 
        name: 'Mangás Chan',
        url: 'https://mangaschan.net/'
      },
    ]
  },
  {
    name: 'Atirador Arcano',
    image: arcaneSniper,
    type: 'manhwa',
    chapter: 133,
    status: 'Lendo',
    scans: [
      { 
        name: 'Saikai Scans',
        url: 'https://saikaiscans.net/'
      },
      { 
        name: 'Mangás Chan',
        url: 'https://mangaschan.net/'
      },
    ]
  },
  {
    name: 'Martial Peak',
    image: martialPeak,
    type: 'manhua',
    chapter: 3645,
    status: 'Lendo',
    scans: [
      { 
        name: 'Argos Scans',
        url: 'https://argosscan.com/'
      },
      { 
        name: 'Mangás Chan',
        url: 'https://mangaschan.net/'
      },
    ]
  },
  {
    name: 'Overgeared',
    image: overgeared,
    type: 'novel',
    chapter: 1954,
    status: 'Lendo',
    scans: [
      { 
        name: 'Wuxia World',
        url: 'https://www.wuxiaworld.com/'
      }
    ]
  },

]