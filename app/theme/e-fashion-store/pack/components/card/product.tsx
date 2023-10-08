import Image from "next/image";
import { TextXSmall } from "../../elements/text";
import { BsStar } from "react-icons/bs";

export default function ProductCard({src, title, price}: {src: string, title: string, price: number}) {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="relative grow w-full">
      <Image src={src} fill alt='product image' className="rounded-2xl" />
      <BsStar className='absolute z-20 text-base text-fashion-store-sec' />
      </div>
      <div className="flex justify-between items-center gap-10">
        <TextXSmall>{title}</TextXSmall>
        <TextXSmall>{`$${price.toString()}`}</TextXSmall>
      </div>
    </div>
  )
}