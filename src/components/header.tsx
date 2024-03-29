import { MessageCircle } from 'lucide-react'

import { useCurrentLesson, useStore } from '../zustand-store'

export function Header() {
  const { currentModule, currentLesson } = useCurrentLesson()

  const isLoading = useStore((store) => store.isLoading)

  if (isLoading) {
    return <h1 className="text-2xl font-bold">Carregando...</h1>
  }

  return (
    <header className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold">{currentLesson?.title}</h1>
        <span className="text-sm text-zinc-400">
          Módulo: {currentModule?.title}
        </span>
      </div>
      <button className="flex items-center gap-2 rounded bg-orange-500 px-3 py-2 font-medium text-sm text-white hover:bg-orange-600">
        <MessageCircle className="size-4" />
        Comment
      </button>
    </header>
  )
}
