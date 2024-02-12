import { Button } from "../Button"

type AvatarProps = {
  image:boolean
}

export const Avatar = ({image}: AvatarProps) => {
  return(
    <div>
      <Button
        size="avatar"
      >
        {
        image ? 
          <div className="relative w-10 h-10 overflow-hidden bg-gray-700 rounded-full">
              <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
          </div>
          :
          <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-700 rounded-full">
              <span className="font-2xl text-green-500">EG</span>
          </div>
        }

      </Button>

    </div>
  )
}