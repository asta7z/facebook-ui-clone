import React from 'react'
import Header from "./components/Header/Header";
import Container from "./components/Container/Container";
import Content from "./components/Container/Content";
import Requests from "./components/Container/Requests";
import Profile from './components/Container/Profile/Profile';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App(){

    return(
        <>
            <Router>
                <Container>
                    <Header/>
                        <Routes>
                            <Route path='/' element={<Content/>}/>
                            <Route path='/requests' element={<Requests/>}/>
                            <Route path='/profile' element={<Profile/>}/>
                        </Routes>
                </Container>
            </Router>
        </>
    )
}

export default App