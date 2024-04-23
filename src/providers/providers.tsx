import { PropsWithChildren } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { FontProvider } from './fontProvider'
import { QueryProvider } from './queryProvider'
import { ThemeProvider } from './themeProvider'

export const Providers = ({ children }: PropsWithChildren) => (
  <QueryProvider>
    <ThemeProvider>
      <FontProvider>
        <SafeAreaProvider>{children}</SafeAreaProvider>
      </FontProvider>
    </ThemeProvider>
  </QueryProvider>
)
