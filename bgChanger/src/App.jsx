import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState("olive");
  const bgRed = () => {
    setColor("red");
  }
  const bgGreen = () => {
    setColor("green");
  }
  const bgBlue = () => {
    setColor("blue");
  }
  const bgMagenta = () => {
    setColor("magenta");
  }
  

  return (
    
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "red"}}
          onClick={bgRed}
          >Red</button>
          <button
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "green"}}
          onClick={bgGreen}
          >Green</button>
          <button
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "blue"}}
          onClick={bgBlue}
          >Blue</button>
          <button
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "magenta"}}
          onClick={bgMagenta}
          >Magenta</button>

        </div>

      </div>

    </div>
  )
}

export default App
