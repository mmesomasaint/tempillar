'use client'

import { TextLabel } from '../elements/text'

export default function DropDown({
  selected,
  setSelected,
  items,
  full,
}: {
  selected: string
  setSelected: (value: string) => void
  items: string[]
  full?: boolean
}) {
  return (
    <div className='relative text-apple-store-pri border border-apple-store-faded-max my-2 p-4 rounded-2xl'>
      <TextLabel>{selected}</TextLabel>
      <div className='top-[100%] border border-apple-store-faded-max rounded-b-2xl'>
        {items.map((item) => (
          <DropItem
            isSelected={selected === item}
            setValue={(value) => setSelected(value)}
            full={full}
          >
            {item}
          </DropItem>
        ))}
      </div>
    </div>
  )
}

function DropItem({
  isSelected,
  setValue,
  full,
  children,
}: {
  isSelected: boolean
  setValue: (value: string) => void
  children: string
  full?: boolean
}) {
  return (
    <div
      onClick={() => setValue(children)}
      className={`my-2 p-4 rounded-2xl border ${
        isSelected ? 'border-apple-store-pri' : 'border-apple-store-faded-max'
      } ${full && 'w-full'}`}
    >
      {children}
    </div>
  )
}
