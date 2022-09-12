import React from 'react'

const IndexedDBContext = React.createContext({  })

interface IndexedDBProviderProps {
  children: JSX.Element
}

export const IndexedDBProvider: React.FC<IndexedDBProviderProps> = ({ children }) => {
  return (
    <IndexedDBContext.Provider value={{  }}>
      {children}
    </IndexedDBContext.Provider>
  )
}
