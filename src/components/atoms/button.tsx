import { ReactNode } from 'react'
import { Pressable, PressableProps, Text } from 'react-native'

export type ButtonProps = PressableProps & {
  children: ReactNode
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  variant?: 'primary' | 'secondary'
  width?: string
}

export const Button = ({
  children,
  leftIcon,
  rightIcon,
  variant = 'primary',
  width = 'w-full',
  ...props
}: ButtonProps) => {
  return (
    <Pressable
      {...props}
      className={`bg-primary-400 flex-row gap-2 items-center justify-center rounded px-4 py-3  ${width}`}
    >
      {leftIcon}
      <Text className='font-gabarito font-bold text-lg text-center text-black'>
        {children}
      </Text>
      {rightIcon}
    </Pressable>
  )
}
