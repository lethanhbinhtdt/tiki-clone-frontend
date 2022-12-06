import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PrivateRoutes from './routes/PrivateRoutes';
import PublicRoutes from './routes/PublicRoutes';

import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';

import 'bootstrap/dist/css/bootstrap.min.css'; // important!
import './App.css'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>

                    <Route element={<PublicRoutes />}>
                        <Route path='/' element={<HomePage />} />
                    </Route>

                    <Route element={<PrivateRoutes />}>
                        <Route path='/' element={<HomePage />} />
                    </Route>

                    <Route path='*' element={<ErrorPage errMsg='Sai đường dẫn'/>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
