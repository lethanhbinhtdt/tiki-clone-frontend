import React from "react";

import NavBar from "../components/layouts/NavBar";

const NoneLayout = ({ children }) => {
    return (
        <>
            <NavBar></NavBar>
            <main>{children}</main>
        </>
    );
};

export default NoneLayout;
