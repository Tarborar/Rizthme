import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Home from './Components/Home.jsx'
import Header from './Components/Header.jsx'
import App from './Components/App.jsx'
import Features from './Components/Features.jsx'
import Changelog from './Components/Changelog.jsx'
import Faq from './Components/Faq.jsx'

import './Styles/main.scss'
import './Styles/utils/normalize.scss'
import './Styles/utils/variables.scss'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <>
            <div className='backgroundColor'></div>
            <Header />
            <div>
                <Home />
                <App />
                <Features />
                <Changelog />
                <Faq />
            </div>
        </>
    </StrictMode>,
)
