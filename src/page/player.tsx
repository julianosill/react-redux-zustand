import { Header } from '../store/components/header'
import { Module } from '../store/components/module'
import { Video } from '../store/components/video'

export function Player() {
  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex w-full max-w-[1280px] flex-col gap-6 px-8">
        <Header />
        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
          <div className="flex-1">
            <Video />
          </div>

          <aside className="w-80 absolute top-0 bottom-0 right-0 border-l divide-y-2 divide-zinc-900 border-zinc-800 bg-zinc-900 overflow-y-auto scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
            <Module
              moduleIndex={0}
              title="Starting with Redux"
              amountOfLessons={6}
            />
            <Module
              moduleIndex={1}
              title="Starting with Redux"
              amountOfLessons={6}
            />
            <Module
              moduleIndex={2}
              title="Starting with Redux"
              amountOfLessons={6}
            />
          </aside>
        </main>
      </div>
    </div>
  )
}
