import { Auth, getAuth } from 'firebase/auth'
import { Container, ErrorMessage, InfoMessage } from './styles'
import { useContext, useState } from 'react'

import LoginButton from '../LoginButton'
import { SignInWithPopupHook } from 'react-firebase-hooks/auth'
import { UserContext } from '../../context/UserContext'
import { VsCurrencyContext } from '../../context/VsCurrencyContext'
import firebase from '../../config/firebase'

interface LoginProps {
  authType: (authType: Auth) => SignInWithPopupHook
  provider: any
  serviceLogo: string
  serviceName: string
}

  export const LoginWithProvider = ({ authType, provider, serviceLogo, serviceName }: LoginProps) => {
    const { getCurrentCurrency } = useContext(VsCurrencyContext)
    const { setToken, setUserName, setProfilePic, setUserID } = useContext(UserContext)
  const [noTokenProvided, setNoTokenProvided] = useState(false)
  const auth = getAuth(firebase)
  auth.languageCode = 'pt-br'

  const [signIn, userCredentials, loading, error] = authType(auth)

  if (userCredentials) {
    const credential = provider.credentialFromResult(userCredentials)
    const token = credential?.accessToken
    const { user } = userCredentials
    const userName = user?.displayName
    const profilePic = user.photoURL

    //const currency = getCurrentCurrency(user.uid)
    

    if (user.uid) {
      getCurrentCurrency(user.uid)
     setUserID(user.uid)
      setToken(token)
      setUserName(userName || '')
      setProfilePic(profilePic || '')
    } else {
      setNoTokenProvided(true)
    }
  }

  // (async ()=>{
  //   const eu = await getCurrentCurrency(userCredentials?.user?.uid || '')
  //   console.log(eu)
  //  })()

  return (
    <Container>
      <LoginButton
        onClick={signIn}
        serviceLogo={serviceLogo}
        serviceName={serviceName}
      />

      {loading && <InfoMessage>Autenticando...</InfoMessage>}
      {error && <InfoMessage showError>Autenticação falhou...</InfoMessage>}
      {/* {error && <ErrorMessage >Autenticação falhou</ErrorMessage>} */}
      {noTokenProvided && (
        <ErrorMessage>
          Houve um erro ao tentar realizar a autenticação
        </ErrorMessage>
      )}
    </Container>
  )
}


