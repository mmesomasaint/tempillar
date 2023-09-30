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
      className={`inline-block leading-[0] text-3xl font-semibold ${primary && 'text-apple-store-pri'} ${
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
      className={`inline-block leading-[0] text-2xl font-semibold ${primary && 'text-apple-store-pri'} ${
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
      className={`inline-block leading-[0] text-xl font-semibold ${primary && 'text-apple-store-pri'} ${
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
      className={`inline-block leading-[0] text-lg font-semibold ${primary && 'text-apple-store-pri'} ${
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
      className={`inline-block leading-[0] text-base font-semibold ${primary && 'text-apple-store-pri'} ${
        faded && 'text-apple-store-faded'
      } ${fadedMax && 'text-apple-store-faded-max'}`}
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
      className={`inline-block leading-[0] text-xs font-semibold ${primary && 'text-apple-store-pri'} ${
        faded && 'text-apple-store-faded'
      } ${fadedMax && 'text-apple-store-faded-max'}`}
    >
      {children}
    </p>
  )
}
