

type ButtonProps = {
  onClick: () => void
  children: React.ReactNode
  typeButton?: string
  size?: 'small' | 'default' | 'large'
  className?: string
}

export const Button = ({ onClick, children, typeButton, size, className }:ButtonProps) => {

  return(
    <>
    {
      size === 'small' &&
      <button 
        onClick={onClick}
        data-type={typeButton}
        data-size={size}
        className={`
        flex items-center justify-center
        w-auto h-6 text-sm p-3 text-white 
        border-2 rounded-lg border-green-500 
        data-[type=bold]:font-bold 
        hover:bg-green-700 
        active:bg-blue-700
        ${className}
        `}
      >
        {children}
      </button>
    }
    {
      size === 'default' &&
      <button 
        onClick={onClick}
        data-type={typeButton}
        data-size={size}
        className={`
        flex items-center justify-center
        w-auto h-8 text-sm p-3 text-white 
        border-2 rounded-md border-green-500 
        data-[type=bold]:font-bold 
        hover:bg-green-700 
        active:bg-blue-700
        ${className}
        `}
      >
        {children}
      </button>
    }
    {
      size === 'large' &&
      <button 
        onClick={onClick}
        data-type={typeButton}
        data-size={size}
        className={`
        flex items-center justify-center
        w-auto h-12 text-lg p-3 text-white 
        border-2 rounded-xl border-green-500 
        data-[type=bold]:font-bold 
        hover:bg-green-700 
        active:bg-blue-700
        ${className}
        `}
      >
        {children}
      </button>
    }
    </>
  )
}