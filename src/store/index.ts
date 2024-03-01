import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { player } from './slices/player'

export const store = configureStore({
  reducer: {
    player,
  },
})

export type TRootState = ReturnType<typeof store.getState>
export type TAppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector
export const useAppDispatch: () => TAppDispatch = useDispatch
