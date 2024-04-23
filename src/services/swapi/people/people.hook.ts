import { useInfiniteQuery, useQuery } from '@tanstack/react-query'

import { fetchPeople, fetchPerson } from './people.api'
import { PeopleResponse, Person } from './people.types'

export function usePeople() {
  return useInfiniteQuery<PeopleResponse, Error>({
    initialPageParam: 1,
    queryKey: ['people'],
    queryFn: ({ pageParam = 1 }) => fetchPeople(pageParam as number),
    getNextPageParam: (lastPage) => {
      const url = new URL(lastPage.next as string)
      return lastPage.next ? Number(url.searchParams.get('page')) : undefined
    },
  })
}

export function usePerson(personId: string) {
  return useQuery<Person, Error>({
    queryKey: ['person', personId],
    queryFn: () => fetchPerson(personId),
    enabled: !!personId,
  })
}
