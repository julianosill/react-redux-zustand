import { PlayCircle, Video } from 'lucide-react'

interface LessonProps {
  title: string
  duration: string
  isCurrent?: boolean
  onPlay: () => void
}

export function Lesson({
  title,
  duration,
  isCurrent = false,
  onPlay,
}: LessonProps) {
  return (
    <button
      onClick={onPlay}
      disabled={isCurrent}
      data-active={isCurrent}
      className="flex items-center gap-3 text-sm text-zinc-400 data-[active=true]:text-orange-500 enabled:hover:text-zinc-100 group"
    >
      {isCurrent ? (
        <PlayCircle className="size-4 text-orange-500" />
      ) : (
        <Video className="size-4 text-zinc-500" />
      )}

      <span>{title}</span>
      <span className="ml-auto font-mono text-xs text-zinc-500">
        {duration}
      </span>
    </button>
  )
}
