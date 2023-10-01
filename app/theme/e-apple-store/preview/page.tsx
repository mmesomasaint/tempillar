import { BsStar } from 'react-icons/bs'
import DropDown from '../pack/components/dropdown'
import { SearchBarMain } from '../pack/components/searchbar'
import { TextIntro, TextLabel } from '../pack/elements/text'

export default function Home() {
  return (
    <main>
      <div className='flex border justify-between items-center gap-40 px-7 py-3'>
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
    </main>
  )
}
