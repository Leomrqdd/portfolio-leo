const COUNT = 16

/** Row of 16 pixel squares. Static for now (will light up one-by-one later). */
export function PixelRow() {
  return (
    <div className="flex flex-wrap gap-1.5" aria-hidden="true">
      {Array.from({ length: COUNT }).map((_, i) => (
        <span key={i} className="h-[14px] w-[14px] bg-accent-bright" />
      ))}
    </div>
  )
}
