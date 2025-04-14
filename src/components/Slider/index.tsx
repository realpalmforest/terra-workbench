import './slider-styles.css'

function Slider({ scale, changeScale }: { scale: number, changeScale: (newScale: number) => void }) {
  return (
    <div>
      <input type="range" min={85} max={130} value={scale} onChange={(e) => changeScale(e.target.value as unknown as number)} />
    </div>
  )
}

export default Slider
