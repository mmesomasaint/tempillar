'use client'

import { BsStar } from 'react-icons/bs'
import { InputBarButton } from './inputBar'
import { OutlineButton } from './outline-btns'

export default function Range({
  ranges,
  min,
  max,
  setMin,
  setMax,
}: {
  ranges: number[][]
  min: number
  max: number
  setMin: (value: number) => void
  setMax: (value: number) => void
}) {
  return (
    <div className='flex flex-col gap-3'>
      <div className='flex flex-col gap-2'>
        <InputBarButton
          placeholder='Minimum'
          searchText={min.toString()}
          setSearchText={(value: string) => setMin(parseInt(value))}
          faded
          reverse
        >
          <BsStar />
        </InputBarButton>
        <InputBarButton
          placeholder='Maximum'
          searchText={max.toString()}
          setSearchText={(value: string) => setMax(parseInt(value))}
          faded
          reverse
        >
          <BsStar />
        </InputBarButton>
      </div>
      <div className='flex gap-2'>
        {ranges.map((range) => {
          const from = range[0]
          const to = range[1]

          return (
            <OutlineButton
              selected={from === min && to === max}
              setSelected={(value: boolean) => {
                if (value) {
                  setMin(from)
                  setMax(to)
                } else {
                  setMin(0)
                  setMax(0)
                }
              }}
            >
              ${from}-${to}
            </OutlineButton>
          )
        })}
      </div>
    </div>
  )
}
