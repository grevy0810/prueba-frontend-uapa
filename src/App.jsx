import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-screen w-screen bg-white">
      <Header />
      <main className="p-4">
        {/* <VideoSection /> */}
      </main>
    </div>
  )
}

export default App
