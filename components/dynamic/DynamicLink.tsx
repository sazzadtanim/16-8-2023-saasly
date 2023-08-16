import React from 'react'
import RightArrow from '../../public/assets/svg/RightArrowpurple.svg'
import Link from 'next/link'

export default function DynamicLink(
  props: {
    text: string
    link: string
    icon: 'yes' | 'no'
    state: 'Hover' | 'Default'
  } & React.AnchorHTMLAttributes<HTMLAnchorElement>
) {
  return (
    <Link
      href={props?.link}
      className={`max-w-fit select-none bg-red-500
      
      ${props.state === 'Default' && 'text-purple-500'} 
      `}
      {...props}
    >
      <div className="flex items-center justify-center gap-1">
        <span
          className={`text-md font-bold capitalize
        ${props.state === 'Default' && 'text-purple-500'} 
        ${props.state === 'Hover' && 'text-purple-400'} 
        ${props.icon === 'no' && 'underline'} 
      
        `}
          {...props}
        >
          {props.text}
        </span>

        <span>
          {props.icon == 'yes' && props.state === 'Default' && (
            <RightArrow className="fill-purple-500" />
          )}
          {props.icon == 'yes' && props.state === 'Hover' && (
            <RightArrow className="fill-purple-400" />
          )}
        </span>
      </div>
    </Link>
  )
}
