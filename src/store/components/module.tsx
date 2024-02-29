import * as Collapsible from '@radix-ui/react-collapsible'
import { ChevronDown } from 'lucide-react'

import { Lesson } from './lesson'

interface ModuleProps {
  moduleIndex: number
  title: string
  amountOfLessons: number
}

export function Module({ moduleIndex, title, amountOfLessons }: ModuleProps) {
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
          <Lesson title="Redux Foundations" duration="09:20" />
          <Lesson title="Redux Foundations" duration="09:20" />
          <Lesson title="Redux Foundations" duration="09:20" />
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
