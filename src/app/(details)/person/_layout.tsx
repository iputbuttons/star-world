import { Stack } from 'expo-router'
import '@configs/tailwind.css'
import { StatusBar } from 'expo-status-bar'
import { useRefetchOnAppFocus } from 'hooks/useRefetchOnAppFocus'
import { useRefetchOnReconnect } from 'hooks/useRefetchOnReconnect'
import { Providers } from 'providers/providers'
import { KeyboardAvoidingView, Platform } from 'react-native'

export { ErrorBoundary } from 'expo-router'

export default function AppLayout() {
  useRefetchOnAppFocus()
  useRefetchOnReconnect()

  return (
    <Providers>
      <StatusBar style='light' />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name='[personId]' />
        </Stack>
      </KeyboardAvoidingView>
    </Providers>
  )
}
