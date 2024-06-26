import React, { ComponentType, FC } from 'react'
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles'
import { defaultTheme } from '../styles/theme'
import CssBaseline from '@mui/material/CssBaseline'

/**
 * Generic HOC function
 * https://www.typescriptlang.org/docs/handbook/2/functions.html
 * withTheme generic function with param P
 * @return FC<P>
 */

export const withTheme = <P extends object>(
  Component: ComponentType<P>
): FC<P> => {
  return (props: P): JSX.Element => {
    const theme = responsiveFontSizes(createTheme(defaultTheme))

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </ThemeProvider>
    )
  }
}
