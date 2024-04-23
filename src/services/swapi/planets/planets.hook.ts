// planets.hook.ts
import { useInfiniteQuery } from '@tanstack/react-query'

import { fetchPlanets } from './planets.api'
import { PlanetsResponse } from './planets.type'

export function usePlanets() {
  return useInfiniteQuery<PlanetsResponse, Error>({
    initialPageParam: 1,
    queryKey: ['planets'],
    queryFn: ({ pageParam = 1 }) => fetchPlanets(pageParam as number),
    getNextPageParam: (lastPage) => {
      const url = new URL(lastPage.next as string)
      return lastPage.next ? Number(url.searchParams.get('page')) : undefined
    },
  })
}
