export function TextHeadline({
  primary,
  faded,
  fadedMax,
  children,
}: {
  children: React.ReactNode
  primary?: boolean
  faded?: boolean
  fadedMax?: boolean
}) {
  return (
    <p
      className={`text-3xl font-semibold ${primary && 'text-apple-store-pri'} ${
        faded && 'text-apple-store-faded'
      } ${fadedMax && 'text-apple-store-faded-max'}`}
    >
      {children}
    </p>
  )
}

export function TextIntro({
  primary,
  faded,
  fadedMax,
  children,
}: {
  children: React.ReactNode
  primary?: boolean
  faded?: boolean
  fadedMax?: boolean
}) {
  return (
    <p
      className={`text-2xl font-semibold ${primary && 'text-apple-store-pri'} ${
        faded && 'text-apple-store-faded'
      } ${fadedMax && 'text-apple-store-faded-max'}`}
    >
      {children}
    </p>
  )
}

export function TextMid({
  primary,
  faded,
  fadedMax,
  children,
}: {
  children: React.ReactNode
  primary?: boolean
  faded?: boolean
  fadedMax?: boolean
}) {
  return (
    <p
      className={`text-xl font-semibold ${primary && 'text-apple-store-pri'} ${
        faded && 'text-apple-store-faded'
      } ${fadedMax && 'text-apple-store-faded-max'}`}
    >
      {children}
    </p>
  )
}

export function TextBase({
  primary,
  faded,
  fadedMax,
  children,
}: {
  children: React.ReactNode
  primary?: boolean
  faded?: boolean
  fadedMax?: boolean
}) {
  return (
    <p
      className={`text-lg font-semibold ${primary && 'text-apple-store-pri'} ${
        faded && 'text-apple-store-faded'
      } ${fadedMax && 'text-apple-store-faded-max'}`}
    >
      {children}
    </p>
  )
}

export function TextSmall({
  primary,
  faded,
  fadedMax,
  children,
}: {
  children: React.ReactNode
  primary?: boolean
  faded?: boolean
  fadedMax?: boolean
}) {
  return (
    <p
      className={`text-base font-semibold ${
        primary && 'text-apple-store-pri'
      } ${faded && 'text-apple-store-faded'} ${
        fadedMax && 'text-apple-store-faded-max'
      }`}
    >
      {children}
    </p>
  )
}

export function TextTiny({
  primary,
  faded,
  fadedMax,
  children,
}: {
  children: React.ReactNode
  primary?: boolean
  faded?: boolean
  fadedMax?: boolean
}) {
  return (
    <p
      className={`text-xs font-semibold ${primary && 'text-apple-store-pri'} ${
        faded && 'text-apple-store-faded'
      } ${fadedMax && 'text-apple-store-faded-max'}`}
    >
      {children}
    </p>
  )
}

export function TextLabel({
  large,
  primary,
  faded,
  fadedMax,
  children,
}: {
  children: React.ReactNode
  large?:boolean
  primary?: boolean
  faded?: boolean
  fadedMax?: boolean
}) {
  return (
    <p
      className={`leading-[0] font-semibold ${large ? 'text-sm' : 'text-xs'} ${
        primary && 'text-apple-store-pri'
      } ${faded && 'text-apple-store-faded'} ${
        fadedMax && 'text-apple-store-faded-max'
      }`}
    >
      {children}
    </p>
  )
}
