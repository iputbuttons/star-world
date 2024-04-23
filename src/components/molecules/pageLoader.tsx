import { Screen } from '@components/atoms/screen'
import { ActivityIndicator } from 'react-native'

export const PageLoader = () => {
  return (
    <Screen>
      <ActivityIndicator size='large' />
    </Screen>
  )
}
