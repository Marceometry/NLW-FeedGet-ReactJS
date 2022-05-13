type Props = {
  size?: number
  className?: string
}

export const Loading = ({ size, className }: Props) => {
  return (
    <svg
      width='14'
      height='14'
      viewBox='0 0 14 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`animate-spin w-${size} h-${size} ${className}`}
    >
      <path
        d='M9.50001 1.5437C10.7445 2.11414 11.7566 3.09303 12.3681 4.31789C12.9797 5.54276 13.1539 6.93993 12.862 8.27748C12.5701 9.61504 11.8295 10.8125 10.7632 11.6712C9.69692 12.5299 8.36905 12.9981 7.00001 12.9981C5.63096 12.9981 4.30309 12.5299 3.2368 11.6712C2.17051 10.8125 1.42994 9.61504 1.13801 8.27748C0.846074 6.93993 1.02034 5.54276 1.63189 4.31789C2.24343 3.09303 3.25547 2.11414 4.50001 1.5437'
        stroke='#71717a'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
