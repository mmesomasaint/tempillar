/** Components representing all the text variants */
export function TextHeadline({
  faded,
  fadedMax,
  children,
  copy,
}: {
  children: string
  fadedMax?: boolean
  faded?: boolean
  copy?: boolean
}) {
  return (
    <p
      className={`${
        copy ? ' leading-tight' : 'leading-none'
      } font-medium text-7xl ${faded && 'text-fashion-store-sec-faded'} ${
        fadedMax && 'text-fashion-store-sec-faded-max'
      }`}
    >
      {children}
    </p>
  )
}

export function TextIntro({
  faded,
  fadedMax,
  children,
  copy,
}: {
  children: string
  fadedMax?: boolean
  faded?: boolean
  copy?: boolean
}) {
  return (
    <p
      className={`${
        copy ? 'leading-tight' : 'leading-none'
      } font-medium text-5xl ${faded && 'text-fashion-store-sec-faded'} ${
        fadedMax && 'text-fashion-store-sec-faded-max'
      }`}
    >
      {children}
    </p>
  )
}

export function TextMid({
  faded,
  fadedMax,
  children,
  copy,
}: {
  children: string
  fadedMax?: boolean
  faded?: boolean
  copy?: boolean
}) {
  return (
    <p
      className={`${
        copy ? 'leading-snug' : 'leading-none'
      } font-medium text-3xl ${faded && 'text-fashion-store-sec-faded'} ${
        fadedMax && 'text-fashion-store-sec-faded-max'
      }`}
    >
      {children}
    </p>
  )
}

export function TextBase({
  faded,
  fadedMax,
  children,
  copy,
}: {
  children: string
  fadedMax?: boolean
  faded?: boolean
  copy?: boolean
}) {
  return (
    <p
      className={`${
        copy ? 'leading-snug' : 'leading-none'
      } font-medium text-2xl ${faded && 'text-fashion-store-sec-faded'} ${
        fadedMax && 'text-fashion-store-sec-faded-max'
      }`}
    >
      {children}
    </p>
  )
}

export function TextSmall({
  faded,
  fadedMax,
  children,
  copy,
}: {
  children: string
  fadedMax?: boolean
  faded?: boolean
  copy?: boolean
}) {
  return (
    <p
      className={`${
        copy ? 'leading-snug' : 'leading-none'
      } font-medium text-xl ${faded && 'text-fashion-store-sec-faded'} ${
        fadedMax && 'text-fashion-store-sec-faded-max'
      }`}
    >
      {children}
    </p>
  )
}

export function TextXSmall({
  faded,
  fadedMax,
  children,
  copy,
}: {
  children: string
  fadedMax?: boolean
  faded?: boolean
  copy?: boolean
}) {
  return (
    <p
      className={`${
        copy ? 'leading-snug' : 'leading-none'
      } font-medium text-base ${faded && 'text-fashion-store-sec-faded'} ${
        fadedMax && 'text-fashion-store-sec-faded-max'
      }`}
    >
      {children}
    </p>
  )
}

export function TextLabel({
  faded,
  fadedMax,
  children,
}: {
  children: string
  faded?: boolean
  fadedMax?: boolean
}) {
  return (
    <p
      className={`leading-[0] font-medium text-base ${
        faded && 'text-fashion-store-sec-faded'
      } ${fadedMax && 'text-fashion-store-sec-faded-max'}`}
    >
      {children}
    </p>
  )
}
