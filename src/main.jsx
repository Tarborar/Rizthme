import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home.jsx'
import Header from './components/Header.jsx'
import App from './pages/App.jsx'
import Features from './pages/Features.jsx'
import Changelog from './pages/Changelog.jsx'
import Faq from './pages/Faq.jsx'
import Error from './pages/Error.jsx'

import './Styles/main.scss'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Router>
            <div className='backgroundColor'></div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/app" element={<App />}></Route>
                <Route path="/features" element={<Features />}></Route>
                <Route path="/changelog" element={<Changelog />}></Route>
                <Route path="/faq" element={<Faq />}></Route>
                <Route path='*' element={<Error />}></Route>
            </Routes>
        </Router>
    </StrictMode>,
)