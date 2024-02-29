/* eslint-disable react/no-unescaped-entities */
import { ChevronDown, MessageCircle, Video } from 'lucide-react'
import ReactPlayer from 'react-player/lazy'

export function Player() {
  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex w-full max-w-[1280px] flex-col gap-6 px-8">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Foundations</h1>
            <span className="text-sm text-zinc-400">
              Module "Starting with Redux"
            </span>
          </div>
          <button className="flex items-center gap-2 rounded bg-orange-600 px-3 py-2 font-medium text-sm text-white hover:bg-orange-500">
            <MessageCircle className="size-4" />
            Comment
          </button>
        </header>

        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
          <div className="flex-1 flex flex-col justify-center">
            <div className="w-full bg-zinc-950 aspect-video">
              <ReactPlayer
                width="100%"
                height="100%"
                controls
                url="https://www.youtube.com/watch?v=_shA5Xwe8_4"
              />
            </div>
          </div>

          <aside className="w-80 absolute top-0 bottom-0 right-0 border-l divide-y-2 divide-zinc-900 border-zinc-800 bg-zinc-900 overflow-y-auto scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
            <div>
              <button className=" flex w-full items-center gap-3 bg-zinc-800 p-3">
                <div className="flex size-8 rounded-full items-center justify-center bg-zinc-900 text-xs">
                  1
                </div>
                <div className="flex flex-col gap-1 text-left">
                  <strong className="text-sm">Starting with Redux</strong>
                  <span className="text-xs text-zinc-400">12 videos</span>
                </div>

                <ChevronDown className="size-5 ml-auto text-zinc-400" />
              </button>

              <nav className="relative flex flex-col gap-4 p-6">
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                  <Video className="size-4 text-zinc-500" />
                  <span>Redux Foundations</span>
                  <span className="ml-auto font-mono text-xs text-zinc-500">
                    09:15
                  </span>
                </button>
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                  <Video className="size-4 text-zinc-500" />
                  <span>Redux Foundations</span>
                  <span className="ml-auto font-mono text-xs text-zinc-500">
                    09:15
                  </span>
                </button>
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                  <Video className="size-4 text-zinc-500" />
                  <span>Redux Foundations</span>
                  <span className="ml-auto font-mono text-xs text-zinc-500">
                    09:15
                  </span>
                </button>
              </nav>
            </div>
            <div>
              <button className=" flex w-full items-center gap-3 bg-zinc-800 p-3">
                <div className="flex size-8 rounded-full items-center justify-center bg-zinc-900 text-xs">
                  1
                </div>
                <div className="flex flex-col gap-1 text-left">
                  <strong className="text-sm">Starting with Redux</strong>
                  <span className="text-xs text-zinc-400">12 videos</span>
                </div>

                <ChevronDown className="size-5 ml-auto text-zinc-400" />
              </button>
            </div>
            <div>
              <button className=" flex w-full items-center gap-3 bg-zinc-800 p-3">
                <div className="flex size-8 rounded-full items-center justify-center bg-zinc-900 text-xs">
                  1
                </div>
                <div className="flex flex-col gap-1 text-left">
                  <strong className="text-sm">Starting with Redux</strong>
                  <span className="text-xs text-zinc-400">12 videos</span>
                </div>

                <ChevronDown className="size-5 ml-auto text-zinc-400" />
              </button>

              <nav className="relative flex flex-col gap-4 p-6">
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                  <Video className="size-4 text-zinc-500" />
                  <span>Redux Foundations</span>
                  <span className="ml-auto font-mono text-xs text-zinc-500">
                    09:15
                  </span>
                </button>
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                  <Video className="size-4 text-zinc-500" />
                  <span>Redux Foundations</span>
                  <span className="ml-auto font-mono text-xs text-zinc-500">
                    09:15
                  </span>
                </button>
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                  <Video className="size-4 text-zinc-500" />
                  <span>Redux Foundations</span>
                  <span className="ml-auto font-mono text-xs text-zinc-500">
                    09:15
                  </span>
                </button>
              </nav>
            </div>
          </aside>
        </main>
      </div>
    </div>
  )
}
