// REACT IMPORTS
import React, { FC, ReactElement } from 'react'

// MUI IMPORTS
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

// ===========================|| CUSTOM ICON TRANSFER ||=========================== //

export const IconTransfer: FC<SvgIconProps> = (props): ReactElement => {
  return (
    <SvgIcon {...props} viewBox='0 0 512 512'>
      <path d='m512 409.386719-128.90625-81.222657c12.222656-21.367187 19.214844-46.089843 19.214844-72.417968 0-23.007813-5.34375-44.789063-14.84375-64.175782v-46.667968c0-55.476563-45.136719-100.609375-100.613282-100.609375h-124.804687v-44.292969l-162.046875 102.105469 128.90625 81.222656c-12.222656 21.367187-19.214844 46.089844-19.214844 72.417969 0 23.007812 5.34375 44.789062 14.847656 64.175781v46.667969c0 55.476562 45.132813 100.609375 100.609376 100.609375h124.808593v44.292969zm-372.28125-153.640625c0-64.117188 52.164062-116.28125 116.28125-116.28125s116.28125 52.164062 116.28125 116.28125c0 64.117187-52.164062 116.28125-116.28125 116.28125s-116.28125-52.164063-116.28125-116.28125zm-7.703125-105.953125-75.683594-47.6875 75.683594-47.691407v19.90625h154.835937c38.917969 0 70.582032 31.664063 70.582032 70.582032v5.503906c-26.320313-25.355469-62.085938-40.972656-101.433594-40.972656-27.199219 0-52.683594 7.472656-74.527344 20.453125h-49.457031zm22.550781 211.292969c26.324219 25.351562 62.085938 40.96875 101.433594 40.96875 27.199219 0 52.6875-7.46875 74.527344-20.453126h49.457031v-19.902343l75.683594 47.6875-75.683594 47.691406v-19.90625h-154.835937c-38.917969 0-70.582032-31.664063-70.582032-70.582031zm0 0' />
      <path d='m269.542969 332.902344v-18.222656c25.445312-4.429688 38.25-19.863282 38.25-37.59375 0-42.351563-63.53125-30.863282-63.53125-44.652344 0-3.9375 3.613281-7.222656 14.9375-7.222656 10.015625 0 20.6875 2.792968 32.011719 8.539062l11.65625-28.074219c-9.355469-5.253906-21.175782-8.371093-33.324219-9.519531v-17.566406h-23.144531v17.894531c-26.925782 3.777344-40.386719 19.371094-40.386719 37.921875 0 42.84375 63.53125 31.191406 63.53125 45.636719 0 3.941406-3.941407 6.238281-14.9375 6.238281-12.640625 0-27.085938-4.105469-37.921875-10.507812l-12.476563 28.238281c9.851563 6.074219 25.773438 10.503906 42.191407 11.488281v17.402344zm0 0' />
    </SvgIcon>
  )
}
