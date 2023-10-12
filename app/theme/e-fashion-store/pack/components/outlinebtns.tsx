'use client'

export default function OutlineButtons({
  options,
  setOptions,
  col,
}: {
  options: {}
  setOptions?: (prev: {}) => void
  col?: boolean
}) {
  const setSelectedHandler = (value: boolean, key: string) => {
    const newOptions = { ...options, [key]: value }
    setOptions?.(newOptions)
  }

  return (
    <div
      className={`flex ${col && 'flex-col'} items-center justify-between gap-5`}
    >
      {Object.keys(options).map((option) => (
        <OutlineButton
          key={option}
          setSelected={(value) => setSelectedHandler(value, option)}
        >
          {option}
        </OutlineButton>
      ))}
    </div>
  )
}

export function OutlineButton({selected, setSelected, children}: {selected?: boolean, setSelected?: (value: boolean) => void, children: string}) {
  const borderColor = selected ? 'border-fashion-store-sec' : 'border-fashion-store-outline'
  const bgColor = selected ? 'bg-fashion-store-sec' : 'bg-fashion-store-outline'
  const textColor = selected ? 'text-white' : 'text-fashion-store-sec'

  return (
    <button
      className={`w-fit py-3 px-7 rounded-full shadow-sm border ${borderColor} ${bgColor}`}
      onClick={() => setSelected?.(!selected)}
    >
      <div className={`flex justify-between items-center gap-4 text-base ${textColor}`}>
        {children}
      </div>
    </button> 
  )
}