import { BsStar } from "react-icons/bs";
import DropDown from "../pack/components/dropdown";
import { SearchBarMain } from "../pack/components/searchbar";
import { TextIntro, TextLabel } from "../pack/elements/text";

export default function Home() {
  return (
    <main>
      <div className="flex">
        <TextIntro>LOGO</TextIntro>
        <div className="flex justify-around items-center gap-5">
      <DropDown selected={'All'} items={['All', 'Macbook', 'iMac', 'iPhone', 'Airpod', 'iWatch']} />
      <SearchBarMain />
        </div>
        <div className="flex justify-end items-center gap-1">
          <BsStar className='text-apple-store-faded-max text-sm' />
          <BsStar className='text-apple-store-faded-max text-sm' />
          <BsStar className='text-apple-store-faded-max text-sm' />
          <TextLabel fadedMax>|</TextLabel>
        </div>
      </div>
    </main>
  )
}