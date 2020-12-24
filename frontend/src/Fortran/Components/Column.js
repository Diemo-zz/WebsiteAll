import {Header} from "./Header";
import {Paragraph} from "./Paragraph";
import React from "react";

const columnstyle = {
    "backgroundColor": "red",
    "display": "flex",
    "flexWrap": "wrap",
    "margin": 0,
    "width": "100%"
}
export const Column = ({text, heading, width = "100%"}) => {
    const className = "column"
    const current_style = {...columnstyle, width: width}
    console.log(current_style)
    console.log(columnstyle)

    return (
        <div className={className} style={current_style}>
            <Header text={heading}/>
            <Paragraph text={text}/>
        </div>
    )

}