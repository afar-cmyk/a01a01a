import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blog from './pages/blog/Blog'
import Main from './pages/main/Main'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
