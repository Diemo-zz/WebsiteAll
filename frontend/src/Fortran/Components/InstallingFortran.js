import React from "react";
import './FortranStyles.css'
import {Header} from "./Header";

export const InstallingFortran = () => {
    const header = "Installing Fortran"

    const text = `How to install Fortran depends on which operating system that you have in use.`
    return (
        <React.Fragment>
            <Header text={header}/>
        </React.Fragment>
    )
}