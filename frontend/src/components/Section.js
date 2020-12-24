import React from "react";
import {Paragraph} from "../Fortran/Components/Paragraph";
import './Section.css'
import {map} from "react-bootstrap/cjs/ElementChildren";
import {Header} from "../Fortran/Components/Header";

export const Section = ({paragraphs, header}) => {
    return (
        <div className="section">
            <Header text={header}/>
            {paragraphs.map(paragraph => <Paragraph text={paragraph.text} key={paragraph.key}/>)}
        </div>
    )
}