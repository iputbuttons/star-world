import { Button } from '@components/atoms/button'
import { Screen } from '@components/atoms/screen'
import { PlanetCard } from '@components/molecules/planetCard'
import { FlatList, Text, ActivityIndicator } from 'react-native'
import { usePlanets } from 'services/swapi/planets/planets.hook'

export default function Planets() {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
  } = usePlanets()

  const handleRetry = () => refetch()

  const renderFooter = () => {
    if (!isFetchingNextPage) return null
    return <ActivityIndicator />
  }

  if (isLoading)
    return (
      <Screen>
        <Text>Loading...</Text>
      </Screen>
    )

  if (error instanceof Error)
    return (
      <Screen>
        <Text>An error occurred: {error.message}</Text>
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
        renderItem={({ item }) => <PlanetCard {...item} />}
      />
    </Screen>
  )
}
