

type InputSelectProps = {
  options: {
    value: string
    label: string
  }[]
  title?: string
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export const InputSelect = ({ options, title, onChange }:InputSelectProps) => {



  return(
    <div className="block w-full">
      <label className="block mb-2 text-md font-medium text-white">
        {title || 'Select an option'}
      </label>
      <select title="select" className="bg-gray-700 border border-green-500 rounded-md focus:border-green-500 block w-full p-3 focus:ring-green-500 text-white"
      onChange={e => onChange(e)}
      >
        <option selected className="opacity-50">{title || 'Choose a option'}</option>
        {
          options?.map((option, index) => (
            <option key={index} value={option.value} className="text-white">{option.label}</option>
          ))
        }
      </select>
    </div>
  )
}