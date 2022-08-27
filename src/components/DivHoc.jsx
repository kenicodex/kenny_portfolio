import React from "react";
import Navbar from '../Semantics/Navbar.tsx'
function Layout(Comp) {
    return (props) => {
        <div>
            <Navbar />
            <Comp {...props} />
        </div>
    };
}
export default Layout;