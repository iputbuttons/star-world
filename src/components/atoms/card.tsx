import { useRouter } from 'expo-router'
import { Image, Pressable, Text, View } from 'react-native'

import { Description } from './description'

type CardProps = {
  description: {
    label: string
    value: string
  }[]
  navigateTo: string
  title: string
}

export const Card = ({ description, navigateTo, title }: CardProps) => {
  const { navigate } = useRouter()

  return (
    <Pressable
      className='flex-row gap-4 p-4'
      onPress={() => navigate(navigateTo)}
    >
      <Image
        height={63}
        source={require('../../assets/components/card/sky.png')}
        width={48}
      />
      <View className='gap-2'>
        <Text className='font-bold font-gabarito text-white text-2xl'>
          {title}
        </Text>
        <View className='flex-row gap-4'>
          {description.map(({ label, value }) => (
            <Description key={label} label={label} value={value} />
          ))}
        </View>
      </View>
    </Pressable>
  )
}
