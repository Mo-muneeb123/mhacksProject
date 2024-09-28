import { useState } from 'react'

import Home from './Home'
import About from './About'
import Map from './Map'
import Contact from './Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      <About />
      <Map />
      <Contact />
    </>
  )
}

export default App
