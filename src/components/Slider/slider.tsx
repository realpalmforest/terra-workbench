import './slider-styles.css'
import { useState } from 'react'

const min: number = 30;
const max: number = 80;

function Slider({ value, changeValue }: { value: number, changeValue: (newValue: number) => void }) {
const [percentage, setPercentage] = useState<number>(0)
  
  return (
    <div className='slider-parent' style={{ '--progress': `${percentage}%` } as React.CSSProperties }>
      <input type="range" className='slider' min={min} max={max} value={value} onChange={(e) => {
        changeValue(e.target.value as unknown as number);
        setPercentage((value - min) / (max - min) * 100);
        }} />
    </div>
  )
}

export default Slider