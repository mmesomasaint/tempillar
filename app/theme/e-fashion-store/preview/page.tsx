import { IoMdNotificationsOutline } from 'react-icons/io'
import { MdOutlineEmail } from 'react-icons/md'
import { TbShoppingBag } from 'react-icons/tb'
import {
  TextBase,
  TextHeadline,
  TextIntro,
  TextLabel,
  TextMid,
  TextSmall,
} from '../pack/elements/text'
import Image from 'next/image'
import Button from '../pack/elements/button'
import { BsStar } from 'react-icons/bs'
import Slider from '../pack/components/slider'
import { ProductCardProps } from '../pack/components/card/product'
import CategoryCard from '../pack/components/card/category'
import InputBar from '../pack/components/inputbar'

const miniProducts: ProductCardProps[] = [
  {
    title: 'Suit Black Panther Cusszz',
    src: '/imgs/show-back-female.jpg',
    price: 29.8,
  },
  {
    title: 'Style Jamet Madorra Kuproy',
    src: '/imgs/caucasian-posed-female.jpg',
    price: 21.0,
  },
  {
    title: 'Plain Cream Shirt',
    src: '/imgs/walking-female.jpg',
    price: 26.43,
  },
]

export default function PreviewHome() {
  return (
    <main className=''>
      <div className='flex justify-between items-center gap-40 px-7 py-5'>
        <TextMid>Kameel</TextMid>
        <div className='grow flex justify-center items-center gap-5'>
          <TextSmall>Home</TextSmall>
          <TextSmall fadedMax>Men</TextSmall>
          <TextSmall fadedMax>Women</TextSmall>
          <TextSmall fadedMax>Coming Soon</TextSmall>
        </div>
        <div className='flex justify-end items-center gap-3 text-fashion-store-outline'>
          <TbShoppingBag className='text-fashion-store-sec text-xl' />
          <IoMdNotificationsOutline className='text-fashion-store-sec text-xl' />
          <MdOutlineEmail className='text-fashion-store-sec text-xl' />
          <TextLabel>|</TextLabel>
          <div className='relative w-7 h-7 rounded-full border border-fashion-store-outline'>
            <Image
              src='/imgs/woman-avatar.jpg'
              fill
              alt='avatar'
              className='rounded-full'
            />
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-10 px-7 py-16'>
        <div className='flex flex-col gap-10 mr-0'>
          <TextHeadline copy>
            Elevate your style with the trends streetwear
          </TextHeadline>
          <Button primary>
            <TextLabel>Shop Now</TextLabel>
            <BsStar className='text-base' />
          </Button>
          <div className='flex justify-start items-center gap-4'>
            <TextBase fadedMax>BrandsLogo</TextBase>
            <TextBase fadedMax>BrandsLogo</TextBase>
            <TextBase fadedMax>BrandsLogo</TextBase>
            <TextBase fadedMax>BrandsLogo</TextBase>
          </div>
        </div>
        <Slider products={miniProducts} />
      </div>
      <div className='px-7 py-16 bg-fashion-store-sec-faded-max/20 w-full'>
        <div className='flex justify-between items-center gap-10'>
          <TextIntro>Our Category</TextIntro>
          <Button primary>
            <TextLabel>See All</TextLabel>
            <BsStar className='text-base' />
          </Button>
        </div>
        <div className='h-[40rem] grid grid-cols-3 grid-rows-2 gap-6 items-stretch py-10'>
          <div className='row-span-2'>
            <CategoryCard
              src='/imgs/caucasian-posed-female.jpg'
              title='Dress'
            />
          </div>
          <div className='col-span-2'>
            <CategoryCard src='/imgs/hori-test.jpg' title='decoration' />
          </div>
          <CategoryCard src='/imgs/men-shoes.jpg' title='Shoe' />
          <CategoryCard src='/imgs/men-shoes.jpg' title='Shoe' />
        </div>
      </div>
      <div className='px-7 py-16'>
        <div className='w-1/2 mx-auto flex justify-center items-center gap-10'>
          <InputBar full />
          <Button primary>
            <BsStar className='text-base' />
            <TextLabel>Filter</TextLabel>
          </Button>
        </div>
      </div>
    </main>
  )
}
