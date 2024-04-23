import { Screen } from '@components/atoms/screen'
import { DataLoader } from '@components/molecules/dataLoader'
import { PageError } from '@components/molecules/pageError'
import { PageLoader } from '@components/molecules/pageLoader'
import { PeopleCard } from '@components/molecules/peopleCard'
import { FlatList } from 'react-native'
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
        renderItem={({ item }: { item: Person }) => <PeopleCard {...item} />}
      />
    </Screen>
  )
}
