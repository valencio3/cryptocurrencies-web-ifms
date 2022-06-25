import { useRoutes } from 'react-router-dom'
import AppHeader from './components/AppHeader'
import { UserContextProvider } from './context/UserContext'
import { VsCurrencyContextProvider } from './context/VsCurrencyContext'
import {routes} from './routes'

const App = () => {

  return (
    <>
    <VsCurrencyContextProvider>
    <UserContextProvider>
      <AppHeader />
      {routes()}
    </UserContextProvider>
    </VsCurrencyContextProvider>
    </>
  )
}

export default App
