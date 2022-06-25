import { Button, ServiceLogo, SignInText } from './styles'

type Props = {
  onClick: () => void
  serviceLogo: string
  serviceName: string
}

const LoginButton = ({ onClick, serviceLogo, serviceName }: Props) => {
  return (
    <Button onClick={() => onClick()}>
      <ServiceLogo src={serviceLogo} alt={serviceName} />
      <SignInText>Entrar com {serviceName}</SignInText>
    </Button>
  )
}

export default LoginButton
