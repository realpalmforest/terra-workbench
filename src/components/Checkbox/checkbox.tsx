import { useEffect } from 'react';
import './checkbox-styles.scss';

import { FaCheck } from "react-icons/fa";

function Checkbox({ value, valueChanged }: { value: boolean, valueChanged: (value: boolean) => void }) {
  
  useEffect(() => {
    valueChanged(value);
  }, [value]);

  return (
    <button 
        className={value ? "checkbox checkbox-checked" : "checkbox"} 
        onClick={() => {valueChanged(!value)}}>
          <FaCheck className='checkmark-icon' />
    </button>
  )
}

export default Checkbox