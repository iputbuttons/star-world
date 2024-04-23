import { Screen } from '@components/atoms/screen'
import { DataLoader } from '@components/molecules/dataLoader'
import { PageError } from '@components/molecules/pageError'
import { PageLoader } from '@components/molecules/pageLoader'
import { PlanetCard } from '@components/molecules/planetCard'
import { FlatList } from 'react-native'
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

  if (isLoading) return <PageLoader />

  if (error instanceof Error) return <PageError error={error} retry={refetch} />

  return (
    <Screen>
      <FlatList
        data={data?.pages.flatMap((page) => page.results)}
        keyExtractor={({ url }) => url}
        ListFooterComponent={<DataLoader isFetching={isFetchingNextPage} />}
        onEndReached={() => hasNextPage && fetchNextPage()}
        onEndReachedThreshold={0.5}
        renderItem={({ item }) => <PlanetCard {...item} />}
      />
    </Screen>
  )
}
