import React from "react";
import {Header} from '../Fortran/Components/Header';
import {Paragraph} from "../Fortran/Components/Paragraph";

const homepage = `
Welcome to my home page. You can use the links at the top to navigate around.

This website is still under construction, and I am using it to learn how to do React.

If you are seeing this, then this is a placeholder website holding only my contact details. 
`


export const Home = () => {
    return (
        <React.Fragment>
            <div>
                <Header text="WELCOME. NOW GO AWAY"/>
                <Paragraph text={homepage}/>
            </div>
        </React.Fragment>
    )
}