import {BsStar} from 'react-icons/bs'
import Accordion from './pack/components/accordion'
import CheckBox from './pack/components/checkbox'
import DropDown from './pack/components/dropdown'
import OutlineButtons, { OutlineButton } from './pack/components/outline-btns'
import {VCard} from './pack/components/product/card'
import Slider from './pack/components/product/slider'
import { InputBarIcon, InputBarButton } from './pack/components/inputBar'
import Button from './pack/elements/button'
import { TextBase, TextHeadline, TextIntro, TextMid, TextSmall, TextTiny } from './pack/elements/text'

export default function AppleStore() {
  return (
    <div>
      <div className='flex flex-col'>
      <TextHeadline primary>Welcome to the electronic apple store</TextHeadline>
      <TextHeadline>Welcome to the electronic apple store</TextHeadline>
      <TextHeadline faded>Welcome to the electronic apple store</TextHeadline>
      <TextHeadline fadedMax>Welcome to the electronic apple store</TextHeadline>
      <TextIntro primary>Welcome to the electronic apple store</TextIntro>
      <TextIntro>Welcome to the electronic apple store</TextIntro>
      <TextIntro faded>Welcome to the electronic apple store</TextIntro>
      <TextIntro fadedMax>Welcome to the electronic apple store</TextIntro>
      <TextMid primary>Welcome to the electronic apple store</TextMid>
      <TextMid>Welcome to the electronic apple store</TextMid>
      <TextMid faded>Welcome to the electronic apple store</TextMid>
      <TextMid fadedMax>Welcome to the electronic apple store</TextMid>
      <TextBase primary>Welcome to the electronic apple store</TextBase>
      <TextBase>Welcome to the electronic apple store</TextBase>
      <TextBase faded>Welcome to the electronic apple store</TextBase>
      <TextBase fadedMax>Welcome to the electronic apple store</TextBase>
      <TextSmall primary>Welcome to the electronic apple store</TextSmall>
      <TextSmall>Welcome to the electronic apple store</TextSmall>
      <TextSmall faded>Welcome to the electronic apple store</TextSmall>
      <TextSmall fadedMax>Welcome to the electronic apple store</TextSmall>
      <TextTiny primary>Welcome to the electronic apple store</TextTiny>
      <TextTiny>Welcome to the electronic apple store</TextTiny>
      <TextTiny faded>Welcome to the electronic apple store</TextTiny>
      <TextTiny fadedMax>Welcome to the electronic apple store</TextTiny>
      </div>
      <Button fillPrimary full>Checkout</Button>
      <Button fillPrimary large full>Buy Now</Button>
      <Button outlinePrimary full>Checkout</Button>
      <Button outlinePrimary large full>Buy Now</Button>
      <Button fillFaded full>Checkout</Button>
      <Button fillFaded large full>Buy Now</Button>
      <Button fillPrimary>Checkout</Button>
      <Button fillPrimary large>Buy Now</Button>
      <Button outlinePrimary>Checkout</Button>
      <Button outlinePrimary large>Buy Now</Button>
      <Button fillFaded>Checkout</Button>
      <Button fillFaded large>Buy Now</Button>
      <Slider srcList={['/imgs/airpods-pro-2nd-gen-singleton-sv.webp',
'/imgs/airpods-pro-2nd-gen-sv-2.webp',
'/imgs/airpods-pro-2nd-gen-sv-in.webp',
'/imgs/airpods-pro-2nd-gen-sv-out.webp']} />
      <VCard title='Apple Macbook Air M1' variants={['256GB', '512GB']} src='/imgs/macbook-pro-fv-2.jpeg' price={1234} discount={2000} colors={['lime', 'gray', 'zinc']} rating={4.8} amountSold={680} />
      <CheckBox check={false}>Macbook Pro</CheckBox>
      <CheckBox check={true}>Airpods Pro</CheckBox>
      <CheckBox check={false}>iMac</CheckBox>
      <CheckBox check={true}>iPhone</CheckBox>
      <OutlineButton selected>128GB</OutlineButton>
      <OutlineButton large>256GB</OutlineButton>
      <OutlineButtons options={{[`Macbook Air 13''`]: false, [`Macbook Air 15''`]: true, [`Macbook Pro 14''`]: false, [`Macbook Pro 16''`]: false}} />
      <InputBarIcon />
      <InputBarButton>Apply</InputBarButton>
      <InputBarButton reverse faded>
        <BsStar />
      </InputBarButton>
      <DropDown selected={'All'} items={['All', 'Macbook', 'iMac', 'iPhone', 'Airpod', 'iWatch']} />
      <Accordion title='Categories'>
      <CheckBox check={false}>Macbook Pro</CheckBox>
      <CheckBox check={true}>Airpods Pro</CheckBox>
      <CheckBox check={false}>iMac</CheckBox>
      <CheckBox check={true}>iPhone</CheckBox>
      </Accordion>
    </div>
  )
}
