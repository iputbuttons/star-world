import { PropsWithChildren } from 'react'
import { View } from 'react-native'

export const Screen = ({ children }: PropsWithChildren) => (
  <View className='bg-black gap-4 h-full p-4 w-full'>{children}</View>
)
