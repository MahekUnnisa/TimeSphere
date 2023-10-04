import { Route, Routes } from 'react-router-dom'
import { Home, Feed } from './containers'
import { Login, Category, Search, Navbar, Sidebar } from './components'
import React from 'react'
import Footer from './containers/Footer'

const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/news" element={<Feed />} />
                <Route path="/news/:category" element={<Category />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App