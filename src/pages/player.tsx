// eslint-disable-next-line simple-import-sort/imports
import { useEffect } from 'react'

import { Module } from '../components/module'
import { Header } from '../components/header'
import { Video } from '../components/video'
import { useAppDispatch, useAppSelector } from '../store'
import { loadCourse, useCurrentLesson } from '../store/slices/player'

export function Player() {
  const dispatch = useAppDispatch()
  const modules = useAppSelector((store) => store.player.course?.modules)
  const { currentLesson } = useCurrentLesson()

  useEffect(() => {
    dispatch(loadCourse())
  }, [])

  useEffect(() => {
    if (currentLesson) {
      document.title = `${currentLesson.title}`
    }
  }, [currentLesson])

  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex w-full max-w-[1280px] flex-col gap-6 px-8">
        <Header />
        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
          <div className="flex-1">
            <Video />
          </div>

          <aside className="w-80 absolute top-0 bottom-0 right-0 border-l divide-y-2 divide-zinc-900 border-zinc-800 bg-zinc-900 overflow-y-auto scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
            {modules &&
              modules.map((module, index) => (
                <Module
                  key={module.id}
                  moduleIndex={index}
                  title={module.title}
                  amountOfLessons={module.lessons.length}
                />
              ))}
          </aside>
        </main>
      </div>
    </div>
  )
}
