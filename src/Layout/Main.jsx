import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Footer/Footer';
import NavBar from '../Component/Navbar/NavBar';

const Main = () => {
    return (
        <div>
            <HelmetProvider>
            <NavBar/>
            <Outlet/>
            <Footer/>
            </HelmetProvider>
        </div>
    );
};

export default Main;