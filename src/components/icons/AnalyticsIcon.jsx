import React from 'react'

export const AnalyticsIcon = ({className='',active=false}) => {
  return (
<svg stroke={active?'#727CF5':''} strokeWidth="1"  className={`${className}`} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.125 15.625V3.75C3.125 3.40482 2.84518 3.125 2.5 3.125C2.15482 3.125 1.875 3.40482 1.875 3.75V16.25C1.875 16.5952 2.15482 16.875 2.5 16.875H17.5C17.8452 16.875 18.125 16.5952 18.125 16.25C18.125 15.9048 17.8452 15.625 17.5 15.625H3.125Z" fill="#100F0D"/>
<path d="M7.08843 7.65464L2.08843 12.0296C1.9528 12.1483 1.875 12.3198 1.875 12.5C1.875 12.5077 1.87514 12.5154 1.87543 12.5231C1.88072 12.6664 1.93517 12.8036 2.02964 12.9116C2.14832 13.0472 2.31977 13.125 2.5 13.125C2.50769 13.125 2.51537 13.1249 2.52305 13.1246C2.66642 13.1193 2.8036 13.0648 2.91157 12.9704L7.5303 8.92897L12.125 12.375C12.3613 12.5522 12.6893 12.5398 12.9116 12.3454L17.9114 7.97051C18.047 7.85183 18.125 7.68023 18.125 7.5C18.125 7.49231 18.1249 7.48463 18.1246 7.47695C18.1193 7.33358 18.0648 7.1964 17.9704 7.08843C17.8517 6.9528 17.6802 6.875 17.5 6.875C17.4923 6.875 17.4846 6.87514 17.4769 6.87543C17.3336 6.88072 17.1964 6.93517 17.0884 7.02964L12.4697 11.071L7.875 7.625C7.63874 7.4478 7.31069 7.46017 7.08843 7.65464Z" fill="#100F0D"/>
</svg>


  )
}
