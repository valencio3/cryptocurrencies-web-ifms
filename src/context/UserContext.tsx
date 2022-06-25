import { ReactNode, createContext, useEffect, useMemo, useState } from 'react'

type UserType = {
  token: string
  userName: string
  userId: string
  profilePic: string
  setToken: (newState: string) => void
  setUserName: (newState: string) => void
  setProfilePic: (newState: string) => void
  setUserID: (newState: string) => void
}

type Props = {
  children: ReactNode
}

const initialValue: UserType = {
  token: localStorage.getItem('token') || '',
  setToken: () => {},
  userName: localStorage.getItem('userName') || '',
  setUserName: () => {},
  profilePic: localStorage.getItem('profilePic') || '',
  setProfilePic: () => {},
  userId: localStorage.getItem('userId') || '',
  setUserID: () => {}
}

// export const UserContext = createContext(initialValue)
export const UserContext = createContext({} as UserType)



export const UserContextProvider = ({ children }: Props) => {
  const [token, setToken] = useState(initialValue.token)
  const [userName, setUserName] = useState(initialValue.userName)
  const [profilePic, setProfilePic] = useState(initialValue.profilePic)
  const [userId, setUserID] = useState(initialValue.userId)

  useEffect(() => {
    
    if(!userId)
    console.log('user', userId)
    saveToLocalStorage
  }, [userId])

  const saveToLocalStorage = useMemo(() => {
    localStorage.setItem('token', token)
    localStorage.setItem('userName', userName)
    localStorage.setItem('profilePic', profilePic)
    localStorage.setItem('userId', userId)
    console.log('saveToLocalStorage')
  },[token, userName, profilePic, userId])

  // }

  return (
    <UserContext.Provider
      value={{
        token,
        setToken,
        userName,
        setUserName,
        profilePic,
        setProfilePic,
        userId,
        setUserID
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
