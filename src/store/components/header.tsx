import { MessageCircle } from 'lucide-react'

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold">Foundations</h1>
        <span className="text-sm text-zinc-400">
          Module: Starting with Redux
        </span>
      </div>
      <button className="flex items-center gap-2 rounded bg-orange-600 px-3 py-2 font-medium text-sm text-white hover:bg-orange-500">
        <MessageCircle className="size-4" />
        Comment
      </button>
    </header>
  )
}
