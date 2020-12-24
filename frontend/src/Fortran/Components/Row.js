import React from "react";
import {Column} from "./Column";

const head = "Introduction to Fortran"
const default_text = "Fortran is an old old language which is getting older by the day and despite how old it is it is still too young to be abandoned"

export const Row = ({heading=head, text=default_text, cells = []}) => {
    const className = "row"
    var column_width = Math.round(99.9/cells.length)
    if (column_width*cells.length > 100) {
        column_width = column_width - 1
    }

    const columns = cells.map((cell, i) => <Column text={cell.text} key = {cell.key} width={column_width+"%"}/>)
    return (
        <React.Fragment>
            <div className={className}>
                {columns}
            </div>
        </React.Fragment>
    )
}