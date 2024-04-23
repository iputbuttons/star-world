import { PeopleResponse, Person } from './people.types'
import { SWAPI_BASE_URL } from '../constants'

export const fetchPeople = async (
  page: number = 1,
): Promise<PeopleResponse> => {
  const response = await fetch(
    `${SWAPI_BASE_URL}/people/?page=${page}&format=json`,
  )
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}

export const fetchPerson = async (personId: string): Promise<Person> => {
  const response = await fetch(
    `${SWAPI_BASE_URL}/people/${personId}/?format=json`,
  )
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}
