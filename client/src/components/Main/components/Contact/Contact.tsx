import React from 'react'
import Home from './components/Home';
import './Contact.scss';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomeNav from './components/HomeNav';
import ClientInfo from './components/ClientInfo';

function Contact() {
    return (
    <Router>
        <HomeNav />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/BackendData" element={<ClientInfo />} />
        </Routes>
    </Router>
    )
}

export default Contact