import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { PropsWithChildren, useEffect } from 'react'

SplashScreen.preventAutoHideAsync()

export const FontProvider = ({ children }: PropsWithChildren) => {
  const [fontsLoaded, fontsError] = useFonts({
    Gabarito: require('../assets/fonts/Gabarito.ttf'),
    Starjedi: require('../assets/fonts/Starjedi.ttf'),
    Starjhol: require('../assets/fonts/Starjhol.ttf'),
  })

  useEffect(() => {
    if (fontsError) {
      console.error(fontsError)
      return
    }

    if (fontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontsError])

  if (!fontsLoaded) return null
  return <>{children}</>
}
