import { Route, Routes } from 'react-router-dom'
import { Home, Feed } from './containers'
import { Login, Category } from './components'
import React from 'react'

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/news" element={<Feed />} />
            <Route path="/news/:category" element={<Category />} />
        </Routes>
    )
}

export default App