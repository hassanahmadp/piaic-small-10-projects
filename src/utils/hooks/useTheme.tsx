'use client'
import React, { createContext, useContext } from 'react'
import { useStorage } from './useStorage'

type ThemeContextValue = {
  dark: boolean
  setDark: React.Dispatch<React.SetStateAction<boolean>>
}



const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
  const [dark, setDark] = useStorage('theme', false)

  const themeContextValue: ThemeContextValue = {dark, setDark}

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}