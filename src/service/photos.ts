import { Photo } from "../types/listAnimesProps"
import { storage } from "../libs/firebase"
import { ref, listAll, getDownloadURL, uploadBytes, deleteObject } from "firebase/storage"
import {v4 as createID} from 'uuid'

export const getAll = async () => {
  let list: Photo[] = []

  const imagesFolder = ref(storage, "images")
  const photoList = await listAll(imagesFolder)

  
  for(let i in photoList.items) {
    let photoUrl = await getDownloadURL(photoList.items[i])
    list.push({
      name: photoList.items[i].name,
      url: photoUrl
    })
  }


  return list
}

export const insert = async (file: File) => {
  if(['image/jpeg','image/jpg','image/png', 'image/webp'].includes(file.type)){

    let randomName = createID()
    let newFile = ref(storage, `images/${randomName}`)

    let upload = await uploadBytes(newFile, file)

    let photoUrl = await getDownloadURL(upload.ref)

    return { name: upload.ref.name, url: photoUrl } as Photo

  } else {
    return new Error('Tipo de arquivo não permitido.')
  }
}

export const deletePhoto = async (id: string) => {
  if(id){
    const deleteImage = ref(storage, `images/${id}`)
  
    const deletar = await deleteObject(deleteImage)

    return 'success'

  } else {
    return new Error('Erro ao deletar imagem')
  }
}