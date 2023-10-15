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

export default function Product({}: ProductProps) {
  return <div>PRoduct main page</div>
}
