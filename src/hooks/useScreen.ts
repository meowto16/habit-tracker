import React from 'react'

import { ScreenDispatcherContext } from '../screens/ScreenDispatcher'

export const useScreen = () => React.useContext(ScreenDispatcherContext)