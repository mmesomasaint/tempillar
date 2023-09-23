import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Link href='/theme/e-apple-store'>
        <button
          type='button'
          className='rounded-2xl px-5 py-2 shadow-md bg-black/50 text-white'
        >
          E-AppleStore Site -&gt;
        </button>
      </Link>
      <Link href='/theme/e-fashion-store'>
        <button
          type='button'
          className='rounded-2xl px-5 py-2 shadow-md bg-black/50 text-white'
        >
          E-FashionStore Site -&gt;
        </button>
      </Link>
    </main>
  )
}
