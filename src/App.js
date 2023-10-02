import { Route, Routes } from 'react-router-dom'
import { Home, Feed } from './containers'
import { Login, Category, Search } from './components'
import React from 'react'

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/news" element={<Feed />} />
            <Route path="/news/:category" element={<Category />} />
            <Route path="/search/:search" element={<Search />} />
        </Routes>
    )
}

export default App