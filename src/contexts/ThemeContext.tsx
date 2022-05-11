import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react'
import { setTheme } from '@/styles'

export type ThemeContextData = {
  isDarkMode: boolean
  setIsDarkMode: (isLoading: boolean) => void
}

export type ThemeContextProviderProps = {
  children: ReactNode
}

export const ThemeContext = createContext({} as ThemeContextData)

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('@feedget/theme') === 'dark' ||
      window.matchMedia('(prefers-color-scheme: dark)').matches
  )

  useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light'
    setTheme(theme)
    localStorage.setItem('@feedget/theme', theme)
  }, [isDarkMode])

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
