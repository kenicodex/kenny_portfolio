import React from 'react';
import Navbar from "../Semantics/Navbar.tsx";

const Layout = ({ children }) => {
    return (
        <>
        <Navbar />
            <>{children}</>
        </>
    )
}

export default Layout;