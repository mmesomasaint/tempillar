'use client'

import {useState} from 'react'
import { BsArrowDown } from 'react-icons/bs'
import { TextLabel } from '../elements/text'

export default function DropDown({
  selected,
  setSelected,
  items,
  full,
}: {
  selected: string
  setSelected?: (value: string) => void
  items: string[]
  full?: boolean
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`inline-block relative text-apple-store-pri border ${open ? 'border-apple-store-pri' : 'border-apple-store-faded-max'} p-4 rounded-2xl w-[10%]`}>
      <div className='flex justify-between items-center gap-5' onClick={() => setOpen(prev => !prev)}>
        <TextLabel>{selected}</TextLabel>
        <BsArrowDown className={`text-sm text-apple-store-pri ${open && 'rotate-180'}`} />
      </div>
      <div className={`${open ? 'block' : 'hidden'} w-full absolute left-0 top-[100%] border-y border-apple-store-faded-max border-t-0 border-b-0 rounded-b-2xl flex flex-col`}>
        {items.map((item) => (
          <DropItem
            isSelected={selected === item}
            setValue={(value) => setSelected && setSelected(value)}
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
      className={`last:rounded-b-2xl p-4 border ${
        isSelected
          ? 'border-apple-store-pri text-apple-store-pri'
          : 'border-apple-store-faded-max text-apple-store-faded-max'
      } ${full && 'w-full'}`}
    >
      <TextLabel>{children}</TextLabel>
    </div>
  )
}