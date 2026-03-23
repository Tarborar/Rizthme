import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home.jsx'
import Header from './Components/Header.jsx'
import App from './Pages/App.jsx'
import Features from './Pages/Features.jsx'
import Changelog from './Pages/Changelog.jsx'
import Faq from './Pages/Faq.jsx'
import Error from './Pages/Error.jsx'

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
