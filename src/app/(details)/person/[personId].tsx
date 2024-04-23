import { PageError } from '@components/molecules/pageError'
import { PageLoader } from '@components/molecules/pageLoader'
import { useLocalSearchParams } from 'expo-router'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { usePerson } from 'services/swapi/people/people.hook'

export default function Person() {
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
      <View className='h-full w-full p-8'>
        <Text className='text-white'>Name: {person?.name}</Text>
        <Text className='text-white'>Height: {person?.height}</Text>
        <Text className='text-white'>Mass: {person?.mass}</Text>
      </View>
    </SafeAreaView>
  )
}
