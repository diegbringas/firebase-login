import { useState } from 'react'
import './App.css'
import { MyRoutes } from './Routes/routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <MyRoutes />
    </div>
  )
}

export default App
