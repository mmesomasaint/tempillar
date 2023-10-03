import { BsStar } from 'react-icons/bs'
import { TbShoppingBag } from 'react-icons/tb'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { MdOutlineEmail } from 'react-icons/md'
import { FiMapPin } from 'react-icons/fi'
import DropDown, { DropDownMultiple } from '../pack/components/dropdown'
import { InputBarIcon } from '../pack/components/inputBar'
import { TextIntro, TextLabel, TextMid, TextTiny } from '../pack/elements/text'
import Accordion from '../pack/components/accordion'
import CheckBox from '../pack/components/checkbox'
import { HR } from '../pack/elements/rule'
import { products, Product } from './lib/products'
import Card from '../pack/components/product/card'
import Range from '../pack/components/range'

export default function Home() {
  return (
    <main className='min-h-screen flex flex-col'>
      <div className='flex border-y border-apple-store-outline-faded-max justify-between items-center gap-40 px-7 py-4'>
        <TextIntro primary>iStore</TextIntro>
        <div className='grow flex justify-center items-center gap-5'>
          <DropDownMultiple
            title={'Categories'}
            selectedItems={['Macbook', 'iPhone', 'iWatch']}
            items={['Macbook', 'iMac', 'iPhone', 'Airpod', 'iWatch']}
          />
          <InputBarIcon />
        </div>
        <div className='flex justify-end items-center gap-3'>
          <TbShoppingBag className='text-apple-store-faded-max text-xl' />
          <IoMdNotificationsOutline className='text-apple-store-faded-max text-xl' />
          <MdOutlineEmail className='text-apple-store-faded-max text-xl' />
          <TextLabel fadedMax>|</TextLabel>
          <div className='w-7 h-7 rounded-full border border-apple-store-outline-faded-max' />
        </div>
      </div>
      <div className='border-b flex justify-between items-center gap-10 border-apple-store-outline-faded-max px-7 py-4'>
        <div className='flex justify-start items-center gap-5'>
          <TextTiny fadedMax>Macbook M2 Air</TextTiny>
          <TextTiny fadedMax>Macbook M2 Pro</TextTiny>
          <TextTiny fadedMax>Apple Watch Ultra</TextTiny>
          <TextTiny fadedMax>Airpods Max</TextTiny>
          <TextTiny fadedMax>iPad Pro</TextTiny>
        </div>
        <div className='flex justify-start items-center gap-2'>
          <span className='flex justify-start items-center gap-1'>
            <FiMapPin className='text-sm text-apple-store-faded-max' />
            <TextLabel fadedMax>Ships to</TextLabel>
          </span>
          <TextLabel>Umuajonisi River, Port Harcourt</TextLabel>
        </div>
      </div>
      <div className='bg-gray-100/70 px-7 py-4 min-h-full grow grid grid-cols-11 gap-5 place-items-start'>
        <div className='col-span-3 h-fit w-full flex flex-col gap-5 bg-white rounded-xl border border-apple-store-outline-faded-max p-5'>
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
            <Accordion title='Condition'>
              <CheckBox check={false}>New Stuff</CheckBox>
              <CheckBox check={false}>Fairly Used</CheckBox>
              <CheckBox check={false}>Second Hand</CheckBox>
            </Accordion>
          </HR>
          <HR>
            <Accordion title='Price'>
              <Range
                ranges={[
                  [500, 1000],
                  [1000, 1500],
                  [1500, 2000],
                  [2000, 2500],
                  [2500, 3000],
                ]}
                min={0}
                max={0}
              />
            </Accordion>
          </HR>
          <Accordion title='Payment' defaultOpen>
            <CheckBox check={false}>Cash on Delivery</CheckBox>
            <CheckBox check={false}>Prepaid</CheckBox>
            <CheckBox check={false}>iStore Coupon</CheckBox>
            <CheckBox check={false}>Binance Pay</CheckBox>
          </Accordion>
        </div>
        <div className='col-span-8 gap-5 flex flex-col'>
          <div className='flex justify-between items-center gap-10'>
            <span className='flex justify-start items-center gap-1'>
              <TextTiny>Showing 1-60 items out of a total of 1.2k for</TextTiny>
              <TextTiny primary>"Apple"</TextTiny>
            </span>
            <div className='flex justify-end items-center gap-3'>
              <TextTiny>Sort by:</TextTiny>
              <DropDown
                selected={'Popular'}
                items={['Popular', 'Price', 'Latest', 'Favorite']}
                full
              />
            </div>
          </div>
          <div className='flex flex-wrap justify-between items-stretch gap-5'>
            {products.map((product: Product, id) => (
              <Card
                key={`${product.src + id}`}
                title={product.title}
                variants={product.variants}
                src={product.src}
                price={product.price}
                discount={product.discount}
                colors={product.colors}
                rating={product.rating}
                amountSold={product.amountSold}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
