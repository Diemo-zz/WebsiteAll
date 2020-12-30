import React from "react";
import {Header} from "../Fortran/Components/Header";
import {Paragraph} from "../Fortran/Components/Paragraph";

const contact_page_first_paragraph = `Hi, welcome to my contact page.`

const contact_page_second_paragraph = `You can get in touch by email at diarmaiddeburca+website@gmail.com`

export const ContactPage = () => {
    return (
        <React.Fragment>
            <Header text={"This is the contact page"}/>
            <Paragraph text={contact_page_first_paragraph} />
            <Paragraph text={contact_page_second_paragraph}/>
        </React.Fragment>

    )
}