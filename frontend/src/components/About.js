import React from "react";
import {Header} from "../Fortran/Components/Header";
import {Paragraph} from "../Fortran/Components/Paragraph";
import {Section} from "./Section";
import paragraphs from './about_paragraphs.json'

export const About = () => {
    return (
            <Section paragraphs={paragraphs.paragraphs} header={"About me"}/>
    )
}