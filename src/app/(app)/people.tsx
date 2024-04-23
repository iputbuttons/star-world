import { Button } from '@components/atoms/button'
import { Screen } from '@components/atoms/screen'
import { PeopleCard } from '@components/molecules/peopleCard'
import { FlatList, Text, ActivityIndicator } from 'react-native'
import { usePeople } from 'services/swapi/people/people.hook'
import { Person } from 'services/swapi/people/people.types'

export default function People() {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
  } = usePeople()

  const handleRetry = () => refetch()

  const renderFooter = () => {
    if (!isFetchingNextPage) return null
    return <ActivityIndicator />
  }

  if (isLoading)
    return (
      <Screen>
        <Text className='font-gabarito text-white text-2xl'>Loading...</Text>
      </Screen>
    )

  if (error instanceof Error)
    return (
      <Screen>
        <Text className='font-gabarito text-white text-2xl'>
          An error occurred: {error.message}
        </Text>
        <Button onPress={handleRetry}>Retry</Button>
      </Screen>
    )

  return (
    <Screen>
      <FlatList
        data={data?.pages.flatMap((page) => page.results)}
        keyExtractor={({ url }) => url}
        ListFooterComponent={renderFooter}
        onEndReached={() => hasNextPage && fetchNextPage()}
        onEndReachedThreshold={0.5}
        renderItem={({ item }: { item: Person }) => <PeopleCard {...item} />}
      />
    </Screen>
  )
}
