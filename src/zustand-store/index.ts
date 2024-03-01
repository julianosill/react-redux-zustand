import { create } from 'zustand'

import { api } from '../lib/axios'

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
  isLoading: boolean
  load: () => Promise<void>
  play: (moduleAndLessonIndex: [number, number]) => void
  next: () => void
}

export const useStore = create<IPlayerState>((set, get) => {
  return {
    course: null,
    currentModuleIndex: 0,
    currentLessonIndex: 0,
    isLoading: true,

    play: (moduleAndLessonIndex: [number, number]) => {
      const [moduleIndex, lessonIndex] = moduleAndLessonIndex

      set({
        currentModuleIndex: moduleIndex,
        currentLessonIndex: lessonIndex,
      })
    },

    load: async () => {
      set({ isLoading: true })
      const response = await api.get('courses/1')
      set({ course: response.data, isLoading: false })
    },

    next: () => {
      const { currentModuleIndex, currentLessonIndex, course } = get()

      const currentModule = currentModuleIndex
      const nextLessonIndex = currentLessonIndex + 1

      const nextLesson = course?.modules[currentModule].lessons[nextLessonIndex]

      if (nextLesson) {
        set({ currentLessonIndex: nextLessonIndex })
        return
      }

      const nextModuleIndex = currentModule + 1
      const nextModule = course?.modules[nextModuleIndex]

      if (nextModule) {
        set({
          currentModuleIndex: nextModuleIndex,
          currentLessonIndex: 0,
        })
      }
    },
  }
})

export const useCurrentLesson = () => {
  return useStore((state) => {
    const { currentModuleIndex, currentLessonIndex } = state

    const currentModule = state.course?.modules[currentModuleIndex]
    const currentLesson = currentModule?.lessons[currentLessonIndex]

    return { currentModule, currentLesson }
  })
}
