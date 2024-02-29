import ReactPlayer from 'react-player/lazy'
import { useDispatch } from 'react-redux'

import { useAppSelector } from '../store'
import { next } from '../store/slices/player'

export function Video() {
  const dispatch = useDispatch()

  const lesson = useAppSelector((store) => {
    const { currentModuleIndex, currentLessonIndex } = store.player

    const currentLesson =
      store.player.course.modules[currentModuleIndex].lessons[
      currentLessonIndex
      ]
    return currentLesson
  })

  function handlePlayNext() {
    dispatch(next())
  }

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        onEnded={handlePlayNext}
        url={`https://www.youtube.com/watch?v=${lesson.id}`}
      />
    </div>
  )
}
