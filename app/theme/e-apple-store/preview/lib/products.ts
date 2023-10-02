export interface Product {
  title: string
  variants: string[]
  src: string
  price: number
  discount: number
  colors: string[]
  rating: number
  amountSold: number
}

export const products: Product[] = [
  {
    title: 'Apple iPhone 14 pro',
    variants: ['64', '128', '256GB', '512GB'],
    src: '/imgs/iphone-white-fv.webp',
    price: 1352,
    discount: 2185,
    colors: ['white', 'gray', 'red'],
    rating: 4.3,
    amountSold: 580,
  },
  {
    title: 'Apple Airpods Max',
    variants: ['256GB', '512GB'],
    src: '/imgs/airpods-max-snowy.webp',
    price: 352,
    discount: 585,
    colors: ['blue', 'yellow', 'red', 'black', 'white', 'lime'],
    rating: 3.8,
    amountSold: 560,
  },
  {
    title: 'Apple iPhone 14 pro',
    variants: ['64', '128', '256GB'],
    src: '/imgs/iphone-white-fv.webp',
    price: 1352,
    discount: 2185,
    colors: ['white', 'gray', 'red'],
    rating: 4.3,
    amountSold: 580,
  },
  {
    title: 'Apple iPad Pro',
    variants: ['256GB', '512GB'],
    src: '/imgs/ipad-sv.webp',
    price: 352,
    discount: 585,
    colors: ['lime', 'gray', 'zinc'],
    rating: 3.8,
    amountSold: 430,
  },
  {
    title: 'Apple Airpods Max',
    variants: ['Noice Cancellation'],
    src: '/imgs/airpods-max-black.webp',
    price: 352,
    discount: 585,
    colors: ['blue', 'yellow', 'red', 'black', 'white', 'lime'],
    rating: 3.8,
    amountSold: 160,
  },
  {
    title: 'Apple Macbook Pro M1',
    variants: ['1TB`', '512GB', '256'],
    src: '/imgs/macbook-pro-fv-1.webp',
    price: 1352,
    discount: 2585,
    colors: ['silver', 'gray', 'brown'],
    rating: 4.8,
    amountSold: 680,
  },
  {
    title: 'Apple iWatch Ultra',
    variants: ['32GB', '64GB', '128GB'],
    src: '/imgs/iwatch-yellow-sv.webp',
    price: 1352,
    discount: 2585,
    colors: ['lime', 'gray', 'zinc'],
    rating: 4.8,
    amountSold: 680,
  },
  {
    title: 'Airpods Pro 2nd Gen',
    variants: ['Noice Cancellation'],
    src: '/imgs/airpods-pro-2nd-gen-singleton-sv.webp',
    price: 152,
    discount: 285,
    colors: ['black', 'gray', 'zinc', 'yellow'],
    rating: 4.0,
    amountSold: 680,
  },
  {
    title: 'Apple Airpods Max',
    variants: ['16GB', '32GB', '64GB'],
    src: '/imgs/airpods-max-blue.webp',
    price: 352,
    discount: 585,
    colors: ['blue', 'yellow', 'red', 'black', 'white', 'lime'],
    rating: 3.8,
    amountSold: 300,
  },
]
