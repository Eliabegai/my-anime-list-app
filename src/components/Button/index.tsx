

type ButtonProps = {
  onClick: () => void
  children: React.ReactNode
  typeButton?: string
}

export const Button = ({ onClick, children, typeButton }:ButtonProps) => {
  return(
    <>
    <button 
      onClick={onClick}
      data-type={typeButton}
      className="w-auto h-10 border-2 border-green-500 rounded-md text-white data-[type=bold]:font-bold hover:bg-green-400 p-2 flex items-center justify-center active:bg-blue-500 focus:bg-green-700"
    >
      {children}
    </button>
    </>
  )
}