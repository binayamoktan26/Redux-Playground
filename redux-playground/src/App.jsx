import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Display } from './Display'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
       
<Display count={count} />
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
         +
        </button>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count - 1)}
        >
          -
        </button>
      </section>

     
    </>
  )
}

export default App
