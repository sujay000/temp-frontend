import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<div>Home</div>} />
        <Route path='/about' element={<div>About</div>} />
        <Route path='*' element={<div>Not Found</div>} />
      </Routes>
    </>
  )
}

export default App
