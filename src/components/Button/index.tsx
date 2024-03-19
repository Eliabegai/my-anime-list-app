type ButtonProps = {
  onClick?: () => void
  children: React.ReactNode
  typeButton?: string
  size?: 'small' | 'default' | 'large' | 'avatar'
  className?: string
  disabled?: boolean
}

export const Button = ({ onClick, children, typeButton, size, className, disabled }:ButtonProps) => {
  
  return(
    <>
    {
      size === 'small' &&
      <button 
        onClick={onClick}
        data-type={typeButton}
        data-size={size}
        disabled={disabled}
        className={`
        flex items-center justify-center
        w-auto h-6 text-sm p-3 text-white 
        border rounded-lg border-green-500 
        data-[type=bold]:font-bold 
        hover:bg-green-700 
        active:bg-blue-700
        disabled:border-gray-700
        disabled:text-gray-300
        disabled:hover:bg-transparent
        disabled:pointer-events-none
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
        border rounded-md border-green-500 
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
        border rounded-xl border-green-500 
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
      size === 'avatar' &&
      <button 
        onClick={onClick}
        data-type={typeButton}
        data-size={size}
        className={`
        flex items-center justify-center
        w-12 h-12
        border rounded-full border-green-500 
        data-[type=bold]:font-bold 
        hover:bg-green-400 
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
