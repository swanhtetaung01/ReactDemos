import { useState } from 'react'
import './App.css'

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const colors = ['#ff0000', '#00ff00', '#0000ff', '#f0f000',
    '#000080', '#800080', '#00ffff', '#000000'
  ];

  const handleClick = (color) => {
    setBackgroundColor(color);
  }

  return (
    <div 
    className='App'
    style={{backgroundColor}}>
      <h1>Color Picker</h1>
      <div className='color-palette'>
        {colors.map((color, index) => (
          <div
          key={index}
          className='color-box'
          style={{backgroundColor: color}}
          onClick={() => handleClick(color)}></div>
        ))}
      </div>

      <div className='custom-color-picker'>
        <input 
        type='color'
        value={backgroundColor}
        onChange={(e) => handleClick(e.target.value)}/>
      </div>
    </div>
  )
}

export default App
