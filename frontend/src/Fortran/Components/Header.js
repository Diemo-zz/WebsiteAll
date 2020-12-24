import React, {useState} from "react";
import './FortranStyles.css'

const headerStyle = {
    alignContent: "center",
    width: "100%",
    textAlign: "center",
    padding: "1%",
    fontsize: "3em",
    backgroundSize: "100%"
}


export const Header = ({text, image_used = "https://apod.nasa.gov/apod/image/2005/ISS-Lighttrail-Reflection.jpg"}) => {
    const className = "header"
    //const [used_style, setUsedStyleAsSomething] = useState(headerStyle)
    //setUsedStyleAsSomething({...headerStyle})
    //console.log(used_style)
    const styleUsed = {...headerStyle, backgroundImage: "url(" + image_used + ")"}
    console.log(styleUsed)
    return (
        <React.Fragment>
            <h1 className={className} style={styleUsed}>{text}</h1>
        </React.Fragment>
    )
}