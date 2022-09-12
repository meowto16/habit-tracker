import React from 'react'

import { CalendarScreen } from './screens/CalendarScreen/Calendar.screen'
import { GoalsScreen } from './screens/GoalsScreen/GoalsScreen'
import { ScreenDispatcherProvider } from './screens/ScreenDispatcher'

import { Screen } from './interfaces/Screen'

export const App: React.FC = () => {
  return (
    <ScreenDispatcherProvider>
      <CalendarScreen id={Screen.calendar} />
      <GoalsScreen id={Screen.goals} />
    </ScreenDispatcherProvider>
  )
}
