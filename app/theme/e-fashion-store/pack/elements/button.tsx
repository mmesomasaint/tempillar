export default function Button({children, primary, outlinePri, outlineSec}: {children: React.ReactNode, primary?: boolean, outlinePri?: boolean, outlineSec?: boolean}) {
  return (
    <button className={`py-2 px-4 rounded-full shadow-sm border border-fashion-store-sec text-white bg-fashion-store-sec ${primary && 'bg-fashion-store-pri border-fashion-store-pri'} ${outlinePri && 'bg-white text-fashion-store-pri border-fashion-store-pri'} ${outlineSec && 'bg-white text-fashion-store-sec border-fashion-store-sec'}`}>
      {children}
    </button>
  )
}