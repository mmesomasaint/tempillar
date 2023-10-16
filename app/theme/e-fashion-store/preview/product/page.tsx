type ProductProps = {
  id: string
  title: string
  srcSet: string[]
  price: number
  variants?: {
    color?: string[]
    size?: number[]
    material?: string[]
  }
  description?: string
}

export default function Product({
  id,
  title,
  srcSet,
  price,
  variants,
  description,
}: ProductProps) {
  return (
    <div className='grid grid-cols-12 gap-10'>
      <div className='col-span-12 md:col-span-3'>
        <div className='relative w-full h-[30rem]'> Product Image</div>
      </div>
      <div className="col-span-12 md:col-span-9">
        Description and Details
      </div>
    </div>
  )
}
