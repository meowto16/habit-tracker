export enum Screen {
  calendar = 'calendar_screen',
  goals = 'goals_screen'
}

export interface ScreenProps {
  id: Screen
}

export interface ScreenDispatcher {
  activeScreen: Screen
  changeScreen: (screen: Screen) => void
}

export interface ScreenDispatcherProps {
  children: JSX.Element | JSX.Element[]
}

