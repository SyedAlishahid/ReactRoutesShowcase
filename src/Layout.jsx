import React from 'react';
import Header from './header';
import Footer from './footer';
import Home from './Home';
import { Outlet } from 'react-router-dom';
function Layout() {
  return (
    <>
     <Header />
     <Outlet />
     <Footer />
    </>
  )
}

export default Layout
