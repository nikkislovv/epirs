export default function YouTubeEmbed({ videoId }: { videoId: string }) {
  return (
    <div className="relative aspect-video border-[7px] border-stroke rounded-[15px] overflow-hidden">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        className="absolute inset-0 w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Семинар ЭПИРС"
      />
    </div>
  )
}
