import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/Global'
import { DefaultTheme } from './styles/themes/default'
import { CycleContextProvider } from './contexts/CyclesContext'

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter>
        <CycleContextProvider>
          <Router />
        </CycleContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
