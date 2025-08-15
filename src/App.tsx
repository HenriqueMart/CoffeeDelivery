import {ThemeProvider} from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import {GlobalStyle} from './styles/global'
import { CartProvider, DataProvider } from './context/CoffeesContext'





function App() {

  

  return (
    <ThemeProvider theme={defaultTheme}>
      <DataProvider>
        <CartProvider>
            <BrowserRouter>
              <Router/>
            </BrowserRouter>
          <GlobalStyle/>
          </CartProvider>
      </DataProvider>
    </ThemeProvider>
  )
}

export default App
