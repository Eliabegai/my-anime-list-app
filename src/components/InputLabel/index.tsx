
type InputLabelProps = {
  children?: React.ReactNode
  placeholder?: string
  value?: string | number
  onChange?:(event: React.ChangeEvent<HTMLInputElement>) => void
  typeInput?: string
  onKeyDown?:(e:React.KeyboardEvent<HTMLInputElement>) => void
  model?: string
}

export const InputLabel = ({ children, placeholder, value, onChange, typeInput, onKeyDown, model }:InputLabelProps) => {
  return(
    <div className="block w-full">
      {
        model === 'search' ?
          <label className="block -mb-8 -ml-16 text-md font-medium text-white">
            {children}
          </label>
        :
          <label className="block mb-2 text-md font-medium text-white">
            {children}
          </label>
      }
      <input 
      type={ typeInput || "text" }
      placeholder={placeholder || "value"}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      className={`bg-gray-700 border border-green-500 text-white text-sm rounded-md block w-full p-3 placeholder-gray-700`}
      />
  </div>
  )
}