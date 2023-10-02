'use client'

import { TextLabel } from '../elements/text'

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
    setOptions && setOptions(newOptions)
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
  children: React.ReactNode
  selected?: boolean
  setSelected?: (value: boolean) => void
  large?: boolean
}) {
  return (
    <div
      onClick={() => setSelected && setSelected(!selected)}
      className={`inline-block p-4 rounded-3xl border ${
        large && 'p-5 rounded-3xl'
      } ${
        selected
          ? 'border-apple-store-pri text-apple-store-pri'
          : 'border-apple-store-faded text-apple-store-faded'
      }`}
    >
      <TextLabel faded={!selected} primary={selected} large={large}>
          {children}
        </TextLabel>
    </div>
  )
}
