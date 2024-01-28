type TooltipProps = {
  label: string
  children: React.ReactNode
}

export const Tooltip = ({label, children}:TooltipProps) => {
  return(
    <div className="flex group relative">
  {children}
  <span 
    className="absolute bottom-3 scale-0 rounded p-2 transition-all w-auto flex flex-row text-xs group-hover:scale-100 border border-green-500 bg-zinc-900 z-50">
    {label}
  </span>
</div>

  )
}