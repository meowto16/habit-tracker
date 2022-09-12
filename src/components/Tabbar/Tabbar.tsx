import React from 'react'

import { useScreen } from '../../hooks/useScreen'
import { Screen } from '../../interfaces/Screen'

export const Tabbar: React.FC = () => {
  const { activeScreen, changeScreen } = useScreen()

  return (
    <div>
      <button
        disabled={activeScreen === Screen.calendar}
        onClick={() => changeScreen(Screen.calendar)}
      >
        Calendar
      </button>
      <button
        disabled={activeScreen === Screen.goals}
        onClick={() => changeScreen(Screen.goals)}
      >
        Goals
      </button>
    </div>
  )
}