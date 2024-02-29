import * as Collapsible from '@radix-ui/react-collapsible'
import { ChevronDown } from 'lucide-react'

import { useAppSelector } from '../store'
import { Lesson } from './lesson'

interface ModuleProps {
  moduleIndex: number
  title: string
  amountOfLessons: number
}

export function Module({ moduleIndex, title, amountOfLessons }: ModuleProps) {
  const lessons = useAppSelector(
    (store) => store.player.course.modules[moduleIndex].lessons,
  )

  return (
    <Collapsible.Root className="group">
      <Collapsible.Trigger className=" flex w-full items-center gap-3 bg-zinc-800 p-3">
        <div className="flex size-8 rounded-full items-center justify-center bg-zinc-900 text-xs">
          {moduleIndex + 1}
        </div>
        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>
          <span className="text-xs text-zinc-400">
            {amountOfLessons} lessons
          </span>
        </div>

        <ChevronDown className="size-5 ml-auto text-zinc-400 group-data-[state=open]:rotate-180 transition-transform" />
      </Collapsible.Trigger>

      <Collapsible.Content asChild>
        <nav className="relative flex flex-col gap-4 p-6">
          {lessons.map((lesson) => (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              duration={lesson.duration}
            />
          ))}
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
