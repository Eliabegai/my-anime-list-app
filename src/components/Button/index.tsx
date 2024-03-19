
type ButtonProps = {
  onClick: () => void
  children: React.ReactNode
  typeButton?: string
  size?: 'small' | 'default' | 'large'
  className?: string
  disabled?: boolean
}

export const Button = ({ onClick, children, typeButton, size, className, disabled }:ButtonProps) => {

  return(
    <>
    {
      size === 'small' &&
      <button
        disabled={disabled}
        onClick={onClick}
        data-type={typeButton}
        data-size={size}
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
        disabled={disabled}
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
      size === 'large' &&
      <button 
        disabled={disabled}
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
    </>
  )
}