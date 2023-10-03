'use client'

import { TbCoin } from 'react-icons/tb'
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
  setMin?: (value: number) => void
  setMax?: (value: number) => void
}) {
  return (
    <div className='flex flex-col gap-3 w-full'>
      <div className='flex flex-col gap-2'>
        <InputBarButton
          placeholder='Minimum'
          searchText={min.toString()}
          setSearchText={(value: string) => setMin && setMin(parseInt(value))}
          faded
          reverse
        >
          <TbCoin />
        </InputBarButton>
        <InputBarButton
          placeholder='Maximum'
          searchText={max.toString()}
          setSearchText={(value: string) => setMax && setMax(parseInt(value))}
          faded
          reverse
        >
          <TbCoin />
        </InputBarButton>
      </div>
      <div className='flex flex-wrap justify-between gap-2'>
        {ranges.map((range) => {
          const from = range[0]
          const to = range[1]

          return (
            <OutlineButton
              key={`${from}~${to}`}
              selected={from === min && to === max}
              setSelected={(value: boolean) => {
                if (value) {
                  setMin && setMin(from)
                  setMax && setMax(to)
                } else {
                  setMin && setMin(0)
                  setMax && setMax(0)
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
