import { ActivityIndicator, View } from 'react-native'

type PageLoaderProps = {
  isFetching: boolean
}

export const DataLoader = ({ isFetching }: PageLoaderProps) => {
  if (!isFetching) return null
  return (
    <View className='p-4'>
      <ActivityIndicator />
    </View>
  )
}
