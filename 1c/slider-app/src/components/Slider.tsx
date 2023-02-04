import React, { useState } from 'react' 

const Slider: React.FC = () => {
  const [value, setValue] = useState("0");

  const handleEvent = (e: React.KeyboardEvent | React.MouseEvent) => {
    setValue((e.target as HTMLInputElement).value);
  }

  return (
    <>
      <input
        type="range"
        id="slider"
        name="slider"
        min="0"
        max="100"
        step="1"
        onMouseUp={handleEvent}
        onKeyUp={handleEvent}
      />
      <p>Slider value: {value}</p>
    </>
  )
}

export default Slider;