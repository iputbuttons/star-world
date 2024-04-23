import { Card } from '@components/atoms/card'
import { Planet } from 'services/swapi/planets/planets.type'

export const PlanetCard = (planet: Planet) => {
  const description = [
    {
      label: 'Diameter',
      value: planet.diameter,
    },
    {
      label: 'Climate',
      value: planet.climate,
    },
    {
      label: 'Population',
      value: planet.population,
    },
  ]

  return <Card title={planet.name} description={description} />
}
