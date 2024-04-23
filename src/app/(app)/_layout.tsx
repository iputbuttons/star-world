import { Gavel } from '@components/icons/gavel'
import { People } from '@components/icons/people'
import { Planets } from '@components/icons/planets'
import { Starships } from '@components/icons/starships'
import { Vehicles } from '@components/icons/vehicles'
import { Tabs } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useRefetchOnAppFocus } from 'hooks/useRefetchOnAppFocus'
import { useRefetchOnReconnect } from 'hooks/useRefetchOnReconnect'
import { useTheme } from 'hooks/useTheme'

export default function AppLayout() {
  const { colors, fontFamily } = useTheme()
  useRefetchOnAppFocus()
  useRefetchOnReconnect()

  return (
    <>
      <StatusBar style='light' />
      <Tabs
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.black,
            borderWidth: 0,
            shadowColor: 'transparent',
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: colors.white,
            fontFamily: fontFamily.starjedi[0],
            fontSize: 18,
          },
          tabBarActiveTintColor: colors.primary[400],
          tabBarInactiveTintColor: colors.gray[400],
          tabBarLabelStyle: {
            fontSize: 14,
            fontFamily: fontFamily.gabarito[0],
            marginTop: 4,
          },
          tabBarItemStyle: {
            backgroundColor: colors.black,
          },
          tabBarStyle: {
            backgroundColor: colors.black,
            borderTopWidth: 0,
            shadowColor: 'transparent',
          },
        }}
      >
        <Tabs.Screen
          name='people'
          options={{
            headerTitle: 'People',
            tabBarLabel: 'People',
            tabBarIcon: ({ color }) => <People color={color} />,
          }}
        />
        <Tabs.Screen
          name='planets'
          options={{
            headerTitle: 'Planets',
            tabBarLabel: 'Planets',
            tabBarIcon: ({ color }) => <Planets color={color} />,
          }}
        />
        <Tabs.Screen
          name='starships'
          options={{
            headerTitle: 'Starships',
            tabBarLabel: 'Starships',
            tabBarIcon: ({ color }) => <Starships color={color} />,
          }}
        />
        <Tabs.Screen
          name='vehicles'
          options={{
            headerTitle: 'Vehicles',
            tabBarLabel: 'Vehicles',
            tabBarIcon: ({ color }) => <Vehicles color={color} />,
          }}
        />
      </Tabs>
    </>
  )
}
