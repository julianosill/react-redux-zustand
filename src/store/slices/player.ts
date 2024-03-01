import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { api } from '../../lib/axios'
import { useAppSelector } from '..'

interface ICourse {
  id: number
  modules: Array<{
    id: number
    title: string
    lessons: Array<{
      id: string
      title: string
      duration: string
    }>
  }>
}
export interface IPlayerState {
  course: ICourse | null
  currentModuleIndex: number
  currentLessonIndex: number
}

const initialState: IPlayerState = {
  course: null,
  currentModuleIndex: 0,
  currentLessonIndex: 0,
}

export const loadCourse = createAsyncThunk('player/load', async () => {
  const response = await api.get('courses/1')
  return response.data
})

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    play: (state, action: PayloadAction<[number, number]>) => {
      state.currentModuleIndex = action.payload[0]
      state.currentLessonIndex = action.payload[1]
    },
    next: (state) => {
      const currentModule = state.currentModuleIndex
      const nextLessonIndex = state.currentLessonIndex + 1
      const nextLesson =
        state.course?.modules[currentModule].lessons[nextLessonIndex]

      if (nextLesson) {
        state.currentLessonIndex = nextLessonIndex
        return
      }

      const nextModuleIndex = currentModule + 1
      const nextModule = state.course?.modules[nextModuleIndex]

      if (nextModule) {
        state.currentModuleIndex = nextModuleIndex
        state.currentLessonIndex = 0
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(loadCourse.fulfilled, (state, action) => {
      state.course = action.payload
    })
  },
})

export const player = playerSlice.reducer
export const { play, next } = playerSlice.actions

export const useCurrentLesson = () => {
  return useAppSelector((state) => {
    const { currentModuleIndex, currentLessonIndex } = state.player

    const currentModule = state.player.course?.modules[currentModuleIndex]
    const currentLesson = currentModule?.lessons[currentLessonIndex]

    return { currentModule, currentLesson }
  })
}
