import React, {useState} from "react";
import { Navbar, Nav, NavItem, NavDropdown, Form, FormControl, Button} from "react-bootstrap";
import {Link, Route, Switch} from "react-router-dom";
import {Home} from "./Home";
import {Secondpage} from "./SecondPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ContactPage} from "./ContactPage";
import {About} from "./About";
import './Navbar.css'
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import {FortranPage} from "../Fortran/FortranPage";
import {FortranHome} from "../Fortran/Components/HomePage";
import {InstallingFortran} from "../Fortran/Components/InstallingFortran";
import {TutorialPage} from "../Fortran/Components/TutorialPage";


const NotFound = () => {
    return (
        <div>
            Unfortunately I can't seem to find that page. Maybe I haven't made it yet?
        </div>
    )
}

export const Navigation = () => {
    const [is_fortran, setFortran] = useState(false)

    const show_fortran = () => {
        setFortran(true)
    }

    const show_main = () => {
        setFortran(false)
    }

    const normal_navigation = [
        {
            "name": "Second Page",
            "path": "/secondpage",
            "id": "1",
            "component": Secondpage
        },
        {
            "name": "Contact",
            "path": "/contact",
            "id": "2",
            "component": ContactPage
        },
        {
            "name": "About",
            "path": "/about",
            "id": "3",
            "component": About
        },
        {
            "name": "Fortran Tutorial",
            "path": "/fortran/home",
            "id": "4",
            "component": FortranPage,
            "switch": show_fortran
        },
        {
            "name": "Facestabbers",
            "path": "/facestabbers",
            "id": "5",
            "component": FortranPage
        }
    ]

    const get_navigation_bar = (list_of_navigation_items) => {
        return (
            <React.Fragment>
                <Navbar className="nav-link">
                    <Navbar.Brand as={Link} to="/" className="brand" onClick={show_main}>Home</Navbar.Brand>
                    <NavbarCollapse>
                        {list_of_navigation_items.map((item) => {
                            if (item.switch){
                                return (<Nav as={Link} to={item.path} key={item.id} class="link" onClick={item.switch}>{item.name}</Nav> )
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

    const fortran_navigation = [
        {
            "name": "Introduction",
            "path": "/fortran/home",
            "id": "7",
            "component": FortranPage
        },
        {
            "name": "Installing Fortran",
            "path": "/fortran/install",
            "id": "8",
            "component": InstallingFortran
        },
        {
            "name": "Fortran Tutorial",
            "path": "/fortran/tutorial",
            "id": "9",
            "component": TutorialPage
        }
    ]

    const no_navigation = [
        {
            "name": "Contact",
            "path": "/contact",
            "id": "2",
            "component": ContactPage
        },
    ];

    if (is_fortran) {
        return get_navigation_bar(no_navigation)
    }
    return get_navigation_bar(no_navigation)
}