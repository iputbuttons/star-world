import { ThemeContext } from 'providers/themeProvider'
import { useContext } from 'react'

export const useTheme = () => useContext(ThemeContext)
