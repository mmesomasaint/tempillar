import { BsStar } from 'react-icons/bs'
import Button from './pack/elements/button'
import {
  TextBase,
  TextHeadline,
  TextIntro,
  TextLabel,
  TextMid,
  TextSmall,
  TextXSmall,
} from './pack/elements/text'
import CategoryCard from './pack/components/card/category'
import CollectionCard from './pack/components/card/collection'
import ProductCard, { ProductCardProps } from './pack/components/card/product'
import Slider from './pack/components/slider'

const miniProducts: ProductCardProps[] = [
  {
    title: 'Suit Black Panther Cusszz',
    src: '/imgs/show-back-female.jpg',
    price: 29.80
  },
  {
    title: 'Style Jamet Madorra Kuproy',
    src: '/imgs/caucasian-posed-female.jpg',
    price: 21.00
  },
  {
    title: 'Plain Cream Shirt',
    src: '/imgs/walking-female.jpg',
    price: 26.43
  }
]

export default function ComponentDisplay() {
  return (
    <div>
      <TextHeadline>Elevate your style with the trends streetwear</TextHeadline>
      <TextHeadline faded>
        Elevate your style with the trends streetwear
      </TextHeadline>
      <TextIntro>Our Category</TextIntro>
      <TextIntro faded>Our Category</TextIntro>
      <TextMid>New Couple Clothes Collection</TextMid>
      <TextMid faded>New Couple Clothes Collection</TextMid>
      <TextBase>Suit Black Panther Cusszz</TextBase>
      <TextBase faded>Suit Black Panther Cusszz</TextBase>
      <TextSmall>We are a different kind of eccommerce, selling</TextSmall>
      <TextSmall faded>
        We are a different kind of eccommerce, selling
      </TextSmall>
      <TextXSmall>Black Mamba Style Lurr</TextXSmall>
      <TextXSmall faded>Black Mamba Style Lurr</TextXSmall>
      <Button>
        <TextLabel>Shop Now</TextLabel>
        <BsStar className='text-lg' />
      </Button>
      <Button primary>
        <TextLabel>See All</TextLabel>
        <BsStar className='text-lg' />
      </Button>
      <Button outlinePri>
        <TextLabel>See All</TextLabel>
        <BsStar className='text-lg' />
      </Button>
      <Button outlineSec>
        <TextLabel>See All</TextLabel>
        <BsStar className='text-lg' />
      </Button>
      <div className='w-1/4 h-60'>
        <CategoryCard src='/imgs/men-shoes.jpg' title='Shoe' />
      </div>
      <div className='h-[30rem] w-[45rem] grid grid-cols-3 grid-rows-2 gap-3 items-stretch'>
        <div className='row-span-2'>
          <CategoryCard src='/imgs/caucasian-posed-female.jpg' title='Shoe' />
        </div>
        <div className='col-span-2'>
          <CategoryCard src='/imgs/hori-test.jpg' title='decoration' />
        </div>
        <CategoryCard src='/imgs/men-shoes.jpg' title='Shoe' />
        <CategoryCard src='/imgs/men-shoes.jpg' title='Shoe' />
      </div>
      <CollectionCard
        bgSrc='/imgs/face3.png'
        title='A New Pair of Shoes'
        subTitle='Streetwear enthusiasts can now enjoy guranteed quality with the release of the latest news in the market'
      />
      <CollectionCard
        picLeft
        bgSrc='/imgs/face3.png'
        title='A New Pair of Shoes'
        subTitle='Streetwear enthusiasts can now enjoy guranteed quality with the release of the latest news in the market'
      />
      <ProductCard
        src='/imgs/orange-dress-female.jpg'
        title='Dress Orange Santa Cruzz'
        price={30.99}
      />
      <Slider products={miniProducts} />
    </div>
  )
}
