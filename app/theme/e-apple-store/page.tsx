import Button from './pack/elements/button'
import { TextBase, TextHeadline, TextIntro, TextMid, TextSmall, TextTiny } from './pack/elements/text'

export default function AppleStore() {
  return (
    <div>
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
    </div>
  )
}
