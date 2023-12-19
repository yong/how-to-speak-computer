import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

const Color = () => {
  const [color, setColor] = useState('#000000');

  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
  };

  // Function to determine whether the color is light or dark
  const isLightColor = (color) => {
    const c = color.substring(1);  // strip #
    const rgb = parseInt(c, 16);   // convert rrggbb to decimal
    const r = (rgb >> 16) & 0xff;  // extract red
    const g = (rgb >>  8) & 0xff;  // extract green
    const b = (rgb >>  0) & 0xff;  // extract blue

    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

    return luma > 128;
  }

  return (
    <div style={{ width: '300px' }}>
      <h1>Learn Hex Encoding of Colors</h1>
      <div style={{ backgroundColor: color, 
        width: '100%', height: '100px', padding: '10px 10px 0px',
        display: 'flex', alignItems: 'center', justifyContent: 'center', color: isLightColor(color) ? 'black' : 'white' }}>
        <p>Selected Color: {color}</p>
      </div>
      <SketchPicker color={color} onChangeComplete={handleColorChange} width='100%' />
    </div>
  );
};

export default Color;
