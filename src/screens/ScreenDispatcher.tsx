import React, { useState } from 'react'

import { Screen, ScreenDispatcher, ScreenDispatcherProps, ScreenProps } from '../interfaces/Screen'
import { noop } from '../utils'

export const ScreenDispatcherContext = React.createContext<ScreenDispatcher>({
  activeScreen: Screen.calendar,
  changeScreen: noop,
})

export const ScreenDispatcherProvider: React.FC<ScreenDispatcherProps> = ({ children }) => {
  const [activeScreen, setActiveScreen] = useState<Screen>(Screen.calendar)

  const handleChangeScreen: ScreenDispatcher['changeScreen'] = (screen) => {
    setActiveScreen(screen)
  }

  const screens = Array.isArray(children) ? children : Array.of(children)

  return (
    <ScreenDispatcherContext.Provider value={{ activeScreen, changeScreen: handleChangeScreen }}>
      {screens.map((screen: React.ReactElement<ScreenProps>) => {
        return screen.props.id === activeScreen ? screen : null
      })}
    </ScreenDispatcherContext.Provider>
  )
}
