import { ChangeEvent } from "react"

export type InputProps= {
  dataValue: boolean
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  type: string
  label: string
  placeholder?: string
}

export const Input = ({dataValue, value, onChange, type, label, placeholder}: InputProps) => {
  return(
    <>
      <input 
        className={`
          w-full h-14 text-base bg-transparent px-5 py-5 border rounded-3xl placeholder-transparent border-green-500
          group
        `} 
        type={type} 
        placeholder={placeholder || 'text'}
        value={value}
        onChange={onChange}
      />
      <label 
        data-password={dataValue} 
        className="absolute top-4 left-6 group-focus-within:-top-6 data-[password='false']:-top-6"
      >
          {label}
      </label>
    </>
  )
}