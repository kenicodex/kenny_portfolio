import React from "react";
import EcomNav from './Navbar/EcomNav'
import Footer from './Navbar/Footer'

function EcomLayout({ children }) {
    return (
        <>
            <EcomNav />
            {children}
            <Footer />

        </>
    )
}
export default EcomLayout;