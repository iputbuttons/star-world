import { Button } from '@components/atoms/button'
import { Screen } from '@components/atoms/screen'
import { Text } from 'react-native'

type PageErrorProps = {
  error: Error
  retry: VoidFunction
}

export const PageError = ({ error, retry }: PageErrorProps) => {
  return (
    <Screen>
      <Text className='font-gabarito text-white text-2xl'>
        An error occurred: {error.message}
      </Text>
      <Button onPress={retry}>Retry</Button>
    </Screen>
  )
}
