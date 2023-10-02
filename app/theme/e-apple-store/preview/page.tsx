import { BsStar } from 'react-icons/bs'
import DropDown from '../pack/components/dropdown'
import { SearchBarMain } from '../pack/components/searchbar'
import { TextIntro, TextLabel, TextTiny } from '../pack/elements/text'

export default function Home() {
  return (
    <main>
      <div className='flex border-y border-apple-store-faded-max justify-between items-center gap-40 px-7 py-4'>
        <TextIntro primary>iStore</TextIntro>
        <div className='grow flex justify-center items-center gap-5'>
          <DropDown
            selected={'All'}
            items={['All', 'Macbook', 'iMac', 'iPhone', 'Airpod', 'iWatch']}
          />
          <SearchBarMain />
        </div>
        <div className='flex justify-end items-center gap-3'>
          <BsStar className='text-apple-store-faded-max text-sm' />
          <BsStar className='text-apple-store-faded-max text-sm' />
          <BsStar className='text-apple-store-faded-max text-sm' />
          <TextLabel fadedMax>|</TextLabel>
          <div className='w-7 h-7 rounded-full border border-apple-store-faded-max' />
        </div>
      </div>
      <div className='border-b flex justify-between items-center gap-10 border-apple-store-faded-max px-7 py-4'>
        <div className='flex justify-start items-center gap-5'>
          <TextTiny fadedMax>Macbook M2 Air</TextTiny>
          <TextTiny fadedMax>Macbook M2 Pro</TextTiny>
          <TextTiny fadedMax>Apple Watch Ultra</TextTiny>
          <TextTiny fadedMax>Airpods Max</TextTiny>
          <TextTiny fadedMax>iPad Pro</TextTiny>
        </div>
        <div className='flex justify-start items-center gap-2'>
          <span className='flex justify-start items-center gap-1'>
            <BsStar className='text-sm text-apple-store-faded-max' />
            <TextTiny fadedMax>Ships to</TextTiny>
          </span>
          <TextTiny>Umuajonisi River, Port Harcourt</TextTiny>
        </div>
      </div>
    </main>
  )
}
