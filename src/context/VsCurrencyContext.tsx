import { ReactNode, createContext, useEffect, useState } from 'react'
import { child, get, getDatabase, ref, set } from 'firebase/database'

import firebaseApp from '../config/firebase'
import { getAuth } from 'firebase/auth'

type VsCurrencyType = {
  vsCurrency: string
  setVsCurrency: (newState: string) => void
  getCurrentCurrency: (userId: string) => void
}

const initialValue: VsCurrencyType = {
  vsCurrency: '',
  setVsCurrency: () => { },
  getCurrentCurrency: () => { }
}

type VsCurrencyContextProps = { children: ReactNode }

export const VsCurrencyContext = createContext<VsCurrencyType>(
  {} as VsCurrencyType
)

export const VsCurrencyContextProvider = ({ children }: VsCurrencyContextProps) => {
  const [vsCurrency, setVsCurrency] = useState(initialValue.vsCurrency)

  useEffect(() => {
    let done = false // eslint-disable-line
    saveCurrency(vsCurrency)
    return () => {
      done = true // eslint-disable-line
    }
  }, [vsCurrency])

  const auth = getAuth(firebaseApp)
  auth.languageCode = 'pt-br'
  const userId = auth.currentUser?.uid
  const dbRef = ref(getDatabase());

  const saveCurrency =  (currency: string) => {
   
    if (userId && currency.length > 0) {
      const db = getDatabase(firebaseApp)
      set(ref(db, 'users/' + userId), {
        currency: currency
      })
        .catch(error => {
          console.log(error)
        })
    }
  }

 const getCurrentCurrency = async (userId: string) => {
   
  await  get(child(dbRef, `users/${userId}`)).then((snapshot) => {
      if (snapshot.exists()) {
        const { currency } = snapshot.val()
        if(currency) {
         setVsCurrency(currency)
       return currency
        }
      } else {
        setVsCurrency('usd')
      }
    }).catch((error) => {
      console.error(error);
    });
  }

  return (
    <VsCurrencyContext.Provider value={{ vsCurrency, setVsCurrency, getCurrentCurrency }}>
      {children}
    </VsCurrencyContext.Provider>
  )
}
