import React from 'react'

import { Tabbar } from '../../components/Tabbar/Tabbar'
import { ScreenProps } from '../../interfaces/Screen'

export const GoalsScreen: React.FC<ScreenProps> = () => {
  return (
    <div>
      <h1>Goals screen</h1>
      <Tabbar />
    </div>
  )
}
