import { useEffect, useState } from 'react';
import './checkbox-styles.css';

import { FaCheck } from "react-icons/fa";

function Checkbox({ valueChanged }: { valueChanged: (value: boolean) => void }) {
  const [value, setValue] = useState<boolean>(false);
  
  useEffect(() => {
    valueChanged(value);
  }, [value]);

  return (
    <button 
        className={value ? "checkbox checkbox-checked" : "checkbox"} 
        onClick={() => {setValue(!value)}}>
          <FaCheck className='checkmark-icon' />
    </button>
  )
}

export default Checkbox