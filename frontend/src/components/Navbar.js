import React, {useState} from "react";
import { Navbar, Nav, NavItem, NavDropdown, Form, FormControl, Button} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import {Link, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Home} from "./Home";
import './Navbar.css'
import {FortranPage} from "../Fortran/FortranPage";
import {Secondpage} from "./SecondPage";


const NotFound = () => {
    return (
        <div>
            Unfortunately I can't seem to find that page. Maybe I haven't made it yet?
        </div>
    )
}

export const Navigation = () => {

    const normal_navigation = [
        {
            "name": "Second Page",
            "path": "/secondpage",
            "id": "1",
            "component": Secondpage
        },
        {
            "name": "Fortran Tutorial",
            "path": "/fortran/home",
            "id": "2",
            "component": FortranPage,
        }

    ]

    const get_navigation_bar = (list_of_navigation_items) => {
        return (
            <React.Fragment>
                <Navbar className="nav-link">
                    <Navbar.Brand as={Link} to="/" className="brand">Home</Navbar.Brand>
                    <NavbarCollapse>
                        {list_of_navigation_items.map((item) => {
                            if (item.switch){
                                return (<Nav as={Link} to={item.path} key={item.id} class="link">{item.name}</Nav> )
                            }
                            return (<Nav as={Link} to={item.path} key={item.id} class="link">{item.name}</Nav> )}
                        )}
                    </NavbarCollapse>
                </Navbar>
                <div className="nav-view">
                    <Switch>
                        <Route exact path={"/"} component={Home} />
                        {list_of_navigation_items.map((item) => (<Route exact path={item.path} component={item.component} />))}
                        <Route render={NotFound} />
                    </Switch>
                </div>
            </React.Fragment>
        )
    }

    return get_navigation_bar(normal_navigation)
}
