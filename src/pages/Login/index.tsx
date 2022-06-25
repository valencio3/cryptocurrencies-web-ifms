import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, getAuth } from 'firebase/auth'
import { Suspense, lazy, useContext, useEffect, useLayoutEffect, useState } from 'react'
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth'

import { Container } from './styles'
import { LoginWithProvider } from '../../components/LoginWithProvider'
import { UserContext } from '../../context/UserContext'
import facebook from '../../assets/img/facebook.png'
import github from '../../assets/img/github.png'
import google from '../../assets/img/google.png'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const { token } = useContext(UserContext)
  
  useEffect(() => {
    if (token) {
      navigate('/home')
    }
  }, [token])

  return (
    <Container>
      <LoginWithProvider
        authType={useSignInWithGithub}
        provider={GithubAuthProvider}
        serviceName="Github"
        serviceLogo={github}
      />
      <LoginWithProvider
        authType={useSignInWithGoogle}
        provider={GoogleAuthProvider}
        serviceName="Google"
        serviceLogo={google}
      />
      <LoginWithProvider
        authType={useSignInWithFacebook}
        provider={FacebookAuthProvider}
        serviceName="Facebook"
        serviceLogo={facebook}
      />
    </Container>
  )
}

export default Login
