import { Card } from '@components/atoms/card'
import { getPersonIdFromUrl } from 'services/swapi/people/people.helpers'
import { Person } from 'services/swapi/people/people.types'

export const PeopleCard = (person: Person) => {
  const personId = getPersonIdFromUrl(person.url)

  const description = [
    {
      label: 'Birth year',
      value: person.birth_year,
    },
    {
      label: 'Height',
      value: person.height,
    },
    {
      label: 'Mass',
      value: person.mass,
    },
    {
      label: 'Hair color',
      value: person.hair_color,
    },
  ]

  return (
    <Card
      title={person.name}
      description={description}
      navigateTo={`person/${personId}`}
    />
  )
}
