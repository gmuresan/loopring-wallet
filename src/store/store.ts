import { configureStore } from '@reduxjs/toolkit'
import hiddenTokensReducer from './hiddenTokens'

export const store = configureStore({
  reducer: {
    hiddenTokens: hiddenTokensReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

