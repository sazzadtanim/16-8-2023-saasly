import React from 'react'

export default function DynamicButton(
  props: {
    text: string
    iconLeft?: React.ReactElement
    iconright?: React.ReactElement
    state: 'primary' | 'secondary' | 'secondary_white'
    size: 'small' | 'medium' | 'large'
  } & React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  const buttonStateStyles = {
    base: 'flex max-w-fit  select-none items-center gap-2 rounded capitalize hover:scale-110',
    primary: 'bg-gradient-purple hover:bg-gradient-deepBlue hover:ring-2',
    secondary: 'ring-2 ring-purple-500',
    secondary_white: 'border-2 border-white',
  }

  const spanStateStyles = {
    base: 'text-lg font-bold',
    primary: 'text-white',
    secondary: 'text-purple-500',
    secondary_white: 'text-white',
  }

  const buttonSizeStyles = {
    small: 'px-6 py-3 text-lg',
    medium: 'px-8 py-4 text-md',
    large: 'px-10 py-5 text-lg',
  }

  return (
    <button
      className={`${buttonStateStyles['base']} ${
        buttonStateStyles[props.state]
      } ${buttonSizeStyles[props.size]}`}
      {...props}
    >
      {props.iconLeft}
      <span
        className={`${spanStateStyles['base']} ${spanStateStyles[props.state]}`}
      >
        {props.text}
      </span>
      {props.iconright}
    </button>
  )
}
