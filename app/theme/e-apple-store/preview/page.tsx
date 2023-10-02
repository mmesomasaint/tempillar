import { BsStar } from 'react-icons/bs'
import DropDown from '../pack/components/dropdown'
import { SearchBarMain } from '../pack/components/searchbar'
import { TextIntro, TextLabel, TextMid, TextTiny } from '../pack/elements/text'
import Accordion from '../pack/components/accordion'
import CheckBox from '../pack/components/checkbox'
import { HR } from '../pack/elements/rule'

export default function Home() {
  return (
    <main className='min-h-screen'>
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
            <TextLabel fadedMax>Ships to</TextLabel>
          </span>
          <TextLabel>Umuajonisi River, Port Harcourt</TextLabel>
        </div>
      </div>
      <div className='bg-gray-100 px-7 py-4 min-h-full grid grid-cols-10 gap-5'>
        <div className='col-span-2 flex flex-col gap-5 bg-white rounded-xl border border-apple-store-faded-max p-5'>
          <TextMid>Filters</TextMid>
          <HR>
            <Accordion title='Categories' defaultOpen>
              <CheckBox check={false}>Airpods</CheckBox>
              <CheckBox check={false}>iPhone</CheckBox>
              <CheckBox check={false}>iPad</CheckBox>
              <CheckBox check={false}>Macbook</CheckBox>
              <CheckBox check={false}>Watch</CheckBox>
            </Accordion>
          </HR>
          <HR>
            <Accordion title='Condition' defaultOpen>
              <CheckBox check={false}>New Stuff</CheckBox>
              <CheckBox check={false}>Fairly Used</CheckBox>
              <CheckBox check={false}>Second Hand</CheckBox>
            </Accordion>
          </HR>
          <HR>
            <Accordion title='Price' defaultOpen>
              Price
            </Accordion>
          </HR>
          <HR>
            <Accordion title='Payment' defaultOpen>
              <CheckBox check={false}>Cash on Delivery</CheckBox>
              <CheckBox check={false}>Prepaid</CheckBox>
              <CheckBox check={false}>iStore Coupon</CheckBox>
              <CheckBox check={false}>Binance Pay</CheckBox>
            </Accordion>
          </HR>
        </div>
      </div>
    </main>
  )
}
