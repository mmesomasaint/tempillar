export function TextHeader({primary, faded, fadedMax, children}: {primary: boolean, faded: boolean, fadedMax: boolean, children: React.ReactNode}) {
  return (
    <div className={`text-3xl font-semibold ${primary && 'bg-apple-store-pri'} ${faded && 'bg-apple-store-faded'} ${fadedMax && 'bg-apple-store-faded-max'}`}>{children}</div>
  )
}

export function TextIntro({primary, faded, fadedMax, children}: {primary: boolean, faded: boolean, fadedMax: boolean, children: React.ReactNode}) {
  return (
    <div className={`text-2xl font-medium ${primary && 'bg-apple-store-pri'} ${faded && 'bg-apple-store-faded'} ${fadedMax && 'bg-apple-store-faded-max'}`}>This is the introductory text: {children}</div>
  )
}

export function TextMid({primary, faded, fadedMax, children}: {primary: boolean, faded: boolean, fadedMax: boolean, children: React.ReactNode}) {
  return (
    <div className={`text-xl font-medium ${primary && 'bg-apple-store-pri'} ${faded && 'bg-apple-store-faded'} ${fadedMax && 'bg-apple-store-faded-max'}`}>This is the medium text: {children}</div>
  )
}

export function TextBase({primary, faded, fadedMax, children}: {primary: boolean, faded: boolean, fadedMax: boolean, children: React.ReactNode}) {
  return (
    <div className={`text-lg font-medium ${primary && 'bg-apple-store-pri'} ${faded && 'bg-apple-store-faded'} ${fadedMax && 'bg-apple-store-faded-max'}`}>This is the base text: {children}</div>
  )
}

export function TextSmall({primary, faded, fadedMax, children}: {primary: boolean, faded: boolean, fadedMax: boolean, children: React.ReactNode}) {
  return (
    <div className={`text-base font-medium ${primary && 'bg-apple-store-pri'} ${faded && 'bg-apple-store-faded'} ${fadedMax && 'bg-apple-store-faded-max'}`}>This is the small text: {children}</div>
  )
}

export function TextTiny({primary, faded, fadedMax, children}: {primary: boolean, faded: boolean, fadedMax: boolean, children: React.ReactNode}) {
  return (
    <div className={`text-xs font-medium ${primary && 'bg-apple-store-pri'} ${faded && 'bg-apple-store-faded'} ${fadedMax && 'bg-apple-store-faded-max'}`}>This is the tiny text: {children}</div>
  )
}