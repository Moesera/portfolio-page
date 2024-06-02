import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
<h1>Hello world</h1>
<p>I will setup routers to handle this page</p>
<button onClick={setCount(count + 1)}>{count}</button>
    </>
  )
}

export default App
