import eleceed from "../src/img/Eleceed.webp"
import arcaneSniper from "../src/img/arcane-sniper.jpg"
import martialPeak from "../src/img/martial-peak.jpg"
import overgeared from "../src/img/overgeared.webp"
import geniusDetective from "../src/img/genius-detective.jpg"
import againstTheGods from "../src/img/against-the-gods.jpeg"
import talesOfDemonsAndGods from "../src/img/tales-of-demons-and-gods.webp"
import onePiece from "../src/img/one-piece.jpg"
import onePunchMan from "../src/img/one-punch-man.jpg"
import apotheosis from "../src/img/apotheosis.jpeg"

import { CardProps } from "./types/listAnimes"

export const listAnimes:CardProps[] = [
  {
    id: 0,
    name: 'Eleceed',
    image: eleceed,
    type: 'manga',
    chapter: 275,
    status: 'Lendo',
    scans: [
      { 
        name: 'Gekkou Scans',
        url: 'https://gekkouscans.top/manga/343599e3-2867-42cb-8439-7acede3ce775/'
      },
      { 
        name: 'Mangás Chan',
        url: 'https://mangaschan.net/'
      },
    ]
  },
  {
    id: 1,
    name: 'Atirador Arcano',
    image: arcaneSniper,
    type: 'manhwa',
    chapter: 133,
    status: 'Lendo',
    scans: [
      { 
        name: 'Saikai Scans',
        url: 'https://saikaiscans.net/comics/atirador-arcano'
      },
      { 
        name: 'Mangás Chan',
        url: 'https://mangaschan.net/'
      },
    ]
  },
  {
    id: 2,
    name: 'Martial Peak',
    image: martialPeak,
    type: 'manhua',
    chapter: 3645,
    status: 'Lendo',
    scans: [
      { 
        name: 'Argos Scans',
        url: 'https://argosscan.com/obras/1/martial-peak'
      },
      { 
        name: 'Mangás Chan',
        url: 'https://mangaschan.net/'
      },
    ]
  },
  {
    id: 3,
    name: 'Overgeared',
    image: overgeared,
    type: 'novel',
    chapter: 1959,
    status: 'Lendo',
    scans: [
      { 
        name: 'Wuxia World',
        url: 'https://www.wuxiaworld.com/novel/overgeared'
      }
    ]
  },
  {
    id: 4,
    name: 'Genius Detective',
    image: geniusDetective,
    type: 'novel',
    chapter: 480,
    status: 'Lendo',
    scans: [
      { 
        name: 'Wuxia World',
        url: 'https://www.wuxiaworld.com/novel/genius-detective'
      }
    ]
  },
  {
    id: 5,
    name: 'Against The Gods',
    image: againstTheGods,
    type: 'novel',
    chapter: 2030,
    status: 'Lendo',
    scans: [
      { 
        name: 'Wuxia World',
        url: 'https://www.wuxiaworld.com/novel/against-the-gods'
      }
    ]
  },
  {
    id: 6,
    name: 'Tales of Demons and Gods',
    image: talesOfDemonsAndGods,
    type: 'manhua',
    chapter: 456,
    status: 'Lendo',
    scans: [
      { 
        name: 'Mangas Chan',
        url: 'https://mangaschan.net/manga/tales-of-demons-and-gods/'
      }
    ]
  },
  {
    id: 7,
    name: 'One Piece',
    image: onePiece,
    type: 'manga',
    chapter: 1094,
    status: 'Lendo',
    scans: [
      { 
        name: 'One Piece Ex',
        url: 'https://onepieceex.net/'
      }
    ]
  },
  {
    id: 8,
    name: 'Apotheosis',
    image: apotheosis,
    type: 'manhwa',
    chapter: 1010,
    status: 'Lendo',
    scans: [
      { 
        name: 'Mangas Chan',
        url: 'https://mangaschan.net/manga/apotheosis/'
      }
    ]
  },
  {
    id: 9,
    name: 'One Punch Man',
    image: onePunchMan,
    type: 'manga',
    chapter: 233,
    status: 'Lendo',
    scans: [
      { 
        name: 'Mangas Chan',
        url: 'https://mangaschan.net/manga/one-punch-man/'
      }
    ]
  },

]