import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from '../main/Home';
import Main from '../main/Main';
import Login from '../main/Login';

const Content = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/main" element={<Main />} />
                <Route path="/login" element={<Login />} />
            </Routes>
       </BrowserRouter>
    )
}

export default Content;