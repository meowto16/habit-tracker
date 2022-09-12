import React from 'react'

import { Tabbar } from '../../components/Tabbar/Tabbar'
import { ScreenProps } from '../../interfaces/Screen'

export const CalendarScreen: React.FC<ScreenProps> = () => {
  return (
    <div>
      <h1>Calendar Screen</h1>
      <Tabbar />
    </div>
  )
}