import { Button } from '@components/atoms/button'
import { Next } from '@components/icons/next'
import { useRouter } from 'expo-router'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Welcome() {
  const { navigate } = useRouter()

  const navigateToPeople = () => navigate('/people')

  return (
    <SafeAreaView style={{ backgroundColor: 'black' }}>
      <View className='h-full w-full p-8'>
        <View className='flex-1 gap-8'>
          <Text className='font-starjhol text-white text-4xl'>{`{ST]ar [World`}</Text>
          <Text className='font-gabarito text-white text-5xl'>
            Tu aventura galáctica comienza aquí
          </Text>
        </View>
        <Button onPress={navigateToPeople} rightIcon={<Next />}>
          Comenzar
        </Button>
      </View>
    </SafeAreaView>
  )
}
