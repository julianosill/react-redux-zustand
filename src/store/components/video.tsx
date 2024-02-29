import ReactPlayer from 'react-player/lazy'

export function Video() {
  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        url="https://www.youtube.com/watch?v=_shA5Xwe8_4"
      />
    </div>
  )
}
