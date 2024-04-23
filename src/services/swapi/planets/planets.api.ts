import { PlanetsResponse } from './planets.type'
import { SWAPI_BASE_URL } from '../constants'

export const fetchPlanets = async (
  page: number = 1,
): Promise<PlanetsResponse> => {
  const response = await fetch(
    `${SWAPI_BASE_URL}/planets/?page=${page}&format=json`,
  )
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}
