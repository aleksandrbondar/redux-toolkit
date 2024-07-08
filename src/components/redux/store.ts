/* eslint-disable @typescript-eslint/no-unused-vars */
import { Action, configureStore, Middleware, ThunkAction } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import userReducer from './userSlice'
import postsReducer from './postsSlice'
import { useDispatch } from 'react-redux'

export type RootState = ReturnType<typeof store.getState>
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>
export type AppDispatch = typeof store.dispatch

const logger: Middleware = (storeApi) => (next) => (action) => {
  const prevState = storeApi.getState()
  const result = next(action)
  const nextState = storeApi.getState()
  return result
}

const store = configureStore({
  reducer: {
    counterStorage: counterReducer,
    userStorage: userReducer,
    postsStorage: postsReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
})

export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store