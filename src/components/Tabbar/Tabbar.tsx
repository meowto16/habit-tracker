import React from 'react'
import clsx from 'clsx'

import { useScreen } from '../../hooks/useScreen'
import { Screen } from '../../interfaces/Screen'

import styles from './Tabbar.module.css'

export const Tabbar: React.FC = () => {
  const { activeScreen, changeScreen } = useScreen()
  
  const items = [
    { screen: Screen.calendar, title: 'Calendar' },
    { screen: Screen.goals, title: 'Goals' },
  ]

  return (
    <div className={styles.container}>
      <nav className={styles.tabbar}>
        {items.map((item) => {
          const isActive = activeScreen === item.screen

          return (
            <button
              key={item.screen}
              className={clsx({
                [styles.tabbar__item]: true,
                [styles.tabbar__item_active]: isActive
              })}
              disabled={isActive}
              onClick={() => changeScreen(item.screen)}
            >
              {item.title}
            </button>
          )
        })}
      </nav>
    </div>
  )
}