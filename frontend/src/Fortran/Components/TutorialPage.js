import React, { useState} from "react";
import {Header} from "./Header";
import {Paragraph} from "./Paragraph";
import {Column} from "./Column";
import {Row} from "./Row";

const text_as_json = [
    {
        name: "blah",
        text: "Blah",
        id: 1
    },
    {
        name: "blah 2",
        text: "blah blah",
        id: 2
    }
    ]
const tutorial_style_box = {
    "backgroundColor": "white",
    "display": "flex",
    "flexWrap": "wrap",
    "margin": 0,
    "whiteSpace": "pre-wrap",
    "resize": "vertical",
    "overflow": "hidden"
}

const CodeAndResults = () => {
    const [value, setValue] = useState("Blah blah blah")

    const id = Math.floor(1000000*Math.random())
    const text_id = "TextBox" + id
    const show_id = "Show" + id

    const handleChange = (event) => {
        event.preventDefault()
        const el = document.getElementById(text_id)
        const changed_value = el.value
        setValue(changed_value)
    }
    //setInputStyle({...tutorial_style_box, width: "50%", margin: 1, color: "white", backgroundColor: "black"})
    //const input_area_style =
    const text_style = {...tutorial_style_box, width: "50%", margin: 1}
    const text_style3 = {...tutorial_style_box, width: "0%", margin: 1, display: "hidden"}
    const input_style = {...tutorial_style_box, width: "50%", margin: 1, color: "white", backgroundColor: "black"}

    return (
        <React.Fragment>
            <div style={{display: "flex"}}>
            <textarea value = {value} onChange={handleChange} id={text_id} style={input_style}/>
            <div style = {text_style3} id={show_id}> {value}</div>
            <div style={text_style} id={show_id + "show"}> Not connected up yet</div>
            </div>
        </React.Fragment>
    )
}


export const TutorialPage = () => {
    return (<React.Fragment>
        <Header text= "Tutorial Page" image_used={"https://apod.nasa.gov/apod/image/2005/ISS-Lighttrail-Reflection.jpg"}/>
        <Paragraph text={"SOME TECZ"}/>
        <Paragraph text={"SOME TECZ2"}/>
        <Paragraph text={"SOME TECZ3"}/>
        <CodeAndResults/>
        <Paragraph text={"fdaklsfja"}/>
        <Paragraph text={"more pare"}/>
        <CodeAndResults/>

    </React.Fragment>)
}