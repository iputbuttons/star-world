import { Button } from '@components/atoms/button'
import { PageError } from '@components/molecules/pageError'
import { PageLoader } from '@components/molecules/pageLoader'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { usePerson } from 'services/swapi/people/people.hook'

export default function Person() {
  const { back } = useRouter()
  const { personId } = useLocalSearchParams()
  const {
    data: person,
    error,
    isLoading,
    refetch,
  } = usePerson(personId as string)

  if (isLoading) return <PageLoader />

  if (error) return <PageError error={error} retry={refetch} />

  return (
    <SafeAreaView style={{ backgroundColor: 'black' }}>
      <View className='h-full w-full p-8 gap-8'>
        <View className='flex-1 p-8 gap-8'>
          <Text className='font-starjedi text-white text-2xl'>
            {person?.name}
          </Text>
          <View className='gap-4'>
            <Text className='text-white tex-base'>
              Height: {person?.height}
            </Text>
            <Text className='text-white tex-base'>Mass: {person?.mass}</Text>
            <Text className='text-white tex-base'>
              Hair color: {person?.hair_color}
            </Text>
          </View>
        </View>
        <Button onPress={back}>Volver</Button>
      </View>
    </SafeAreaView>
  )
}
