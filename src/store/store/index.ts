import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

export const store = configureStore({
  reducer: {},
})

export type TRootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector
