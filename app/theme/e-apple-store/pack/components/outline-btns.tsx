export default function OutlineButtons({
  options,
  setOptions,
  col,
}: {
  options: {}
  setOptions: (prev: {}) => void
  col: boolean
}) {
  const setSelectedHandler = (value: boolean, key: string) => {
    const newOptions = { ...options, [key]: value }
    setOptions(newOptions)
  }

  return (
    <div
      className={`flex ${col && 'flex-col'} items-center justify-start gap-5`}
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

export function OutlineButton({
  large,
  selected,
  setSelected,
  children,
}: {
  selected?: boolean
  setSelected: (prev: boolean) => void
  children: React.ReactNode
  large?: boolean
}) {
  return (
    <div
      onClick={() => setSelected(!selected)}
      className={`leading-[0] text-base font-semibold my-2 p-4 rounded-2xl border border-apple-store-faded text-apple-store-faded ${
        large && 'text-xl my-4 p-6 rounded-3xl'
      } ${selected && 'border-apple-store-pri text-apple-store-pri'}`}
    >
      {children}
    </div>
  )
}
