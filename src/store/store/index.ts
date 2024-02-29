import { configureStore, createSlice } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

const todoSlice = createSlice({
  name: 'todo',
  initialState: ['Create project using Redux'],
  reducers: {
    add: (state, action) => {
      state.push(action.payload)
    },
  },
})

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
})

export const { add } = todoSlice.actions

export type TRootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector
