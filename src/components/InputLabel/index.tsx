
type InputLabelProps = {
  children: React.ReactNode
  placeholder?: string
  value: string
  onChange?:(event: React.ChangeEvent<HTMLInputElement>) => void
  typeInput: string
}

export const InputLabel = ({ children, placeholder, value, onChange, typeInput }:InputLabelProps) => {
  return(
    <div className="mb-6">
    <label className="block mb-2 text-md font-medium text-white">
      {children}
      </label>
    <input 
    type={ typeInput || "text" }
    placeholder={placeholder || "value"}
    value={value}
    onChange={onChange}
    className={`
    bg-gray-700 border border-green-500 text-white text-sm rounded-md block w-full p-3
    placeholder-gray-700
    `}/>
</div>
  )
}