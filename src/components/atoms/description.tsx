import { Text, View } from 'react-native'

type DescriptionProps = {
  label: string
  value: string
}

export const Description = ({ label, value }: DescriptionProps) => (
  <View>
    <Text className='capitalize font-bold font-gabarito text-white text-base'>
      {value}
    </Text>
    <Text className='font-gabarito text-gray-400 text-base'>{label}</Text>
  </View>
)
