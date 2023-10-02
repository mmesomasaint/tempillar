export function HR({children}: {children?: React.ReactNode}) {
  return <div className={`border-b border-apple-store-faded-max w-full ${children && 'pb-3'}`}>{children}</div>
}
