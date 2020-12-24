import React from "react";
import './FortranStyles.css'

export const Paragraph = ({text}) => {
    const className = "paragraph"
    const opts = "className=" +{className}
    console.log(opts)
    return (<p className={className}>
        {text}
    </p>)
}