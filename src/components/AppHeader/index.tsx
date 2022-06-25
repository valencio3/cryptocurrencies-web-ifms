import {
  Header,
  SelectVsCurrency,
  SignOutButton,
  Title,
  UserName,
  VsCurrencyLabel,
  VsCurrencyOption,
} from './styles'

import { UserContext } from '../../context/UserContext'
import { VsCurrencyContext } from '../../context/VsCurrencyContext'
import firebaseApp from '../../config/firebase'
import { getAuth } from 'firebase/auth'
import logout from '../../assets/img/logout.png'
import { useContext } from 'react'

const AppHeader = () => {
  const { vsCurrency, setVsCurrency } = useContext(VsCurrencyContext)
  const { token, userName, setProfilePic, setToken, setUserName, setUserID } = useContext(UserContext)
  const auth = getAuth(firebaseApp)
  const firstName = userName?.split(' ')[0]

  const handleSignOut = () => {
    setToken('')
    setUserName('')
    setProfilePic('')
    setUserID('')
    auth.signOut()
  }

  return (
    <Header>
      <Title>Crypto Currencies</Title>
      {token && (
        <>
          <UserName>{firstName}</UserName>
          <VsCurrencyLabel>Vs. Currency:</VsCurrencyLabel>
          <SelectVsCurrency
            value={vsCurrency}
            onChange={(event) => setVsCurrency(event.target.value)}
          >
            <VsCurrencyOption value='usd'>US Dolar</VsCurrencyOption>
            <VsCurrencyOption value='brl'>BR Real</VsCurrencyOption>
            <VsCurrencyOption value='eur'>Euro</VsCurrencyOption>
            <VsCurrencyOption value='jpy'>Yen</VsCurrencyOption>
            <VsCurrencyOption value='cny'>Renminbi</VsCurrencyOption>
          </SelectVsCurrency>
          <SignOutButton src={logout} onClick={handleSignOut} />
        </>
      )}
    </Header>
  )
}

export default AppHeader
