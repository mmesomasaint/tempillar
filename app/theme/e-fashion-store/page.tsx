import { TextBase, TextHeadline, TextIntro, TextMid, TextSmall, TextXSmall } from "./pack/elements/text";

export default function ComponentDisplay() {
  return (
    <div>
      <TextHeadline>Elevate your style with the trends streetwear</TextHeadline>
      <TextHeadline faded>Elevate your style with the trends streetwear</TextHeadline>
      <TextIntro>Our Category</TextIntro>
      <TextIntro faded>Our Category</TextIntro>
      <TextMid>New Couple Clothes Collection</TextMid>
      <TextMid faded>New Couple Clothes Collection</TextMid>
      <TextBase>Suit Black Panther Cusszz</TextBase>
      <TextBase faded>Suit Black Panther Cusszz</TextBase>
      <TextSmall>We are a different kind of eccommerce, selling</TextSmall>
      <TextSmall faded>We are a different kind of eccommerce, selling</TextSmall>
      <TextXSmall>Black Mamba Style Lurr</TextXSmall>
      <TextXSmall faded>Black Mamba Style Lurr</TextXSmall>
    </div>
  )
}