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


const FortranNotFound = () => {
    return (<div>
        404 Not Found
    </div>)
}

const NotFound = () => {
    return (
        <div>
            Unfortunately I can't seem to find that page. Maybe I haven't made it yet?
        </div>
    )
}

export const Navigation = () => {
    const [is_fortran, setFortran] = useState(false)

    const set_fortran_state = () => {
        setFortran(!is_fortran)
    }

    const set_state = () => {
        console.log("RAN SET STATE")
        setFortran(false)
    }
    const get_normal_navigation = () => (
        <React.Fragment>
            <div className="nav-bar">
                <Navbar className="nav-link">
                    <Navbar.Brand as={Link} to="/" className="brand">Home</Navbar.Brand>
                    <NavbarCollapse>
                        <Nav as={Link} to="/secondpage" className="link">SecondPage</Nav>
                        <Nav as={Link} onClick ={set_fortran_state} to="/fortran/home" className="link">Fortran Tutorial</Nav>
                        <Nav as={Link} to="/contact" className="link">Contact</Nav>
                        <Nav as={Link} to="/about" className="link">About</Nav>
                    </NavbarCollapse>
                </Navbar>
            </div>
            <div className="nav-view">
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/secondpage' component={Secondpage}/>
                    <Route exact path='/contact' component={ContactPage}/>
                    <Route exact path='/about' component={About}/>
                    <Route path={'/fortran'} component={FortranPage} />
                    <Route render={NotFound} />
                </Switch>
            </div>
        </React.Fragment>
    )

    const get_fortran_navigation = () => (
        <div>
              <Navbar className={"fortran-nav-bar"}>
            <Nav as={Link} onClick={set_state} to={"/"} className={"fortran-link"}>Home</Nav>
            <Nav as={Link} to={"/fortran/install"} className={"fortran-link"}>Installing Fortran</Nav>
            <Nav as={Link} to={"/fortran/tutorial"} className={"fortran-link"}>Fortran Tutorial</Nav>
        </Navbar>
        <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/fortran/install"} component={InstallingFortran} />
            <Route exact path={"/fortran/tutorial"} component={TutorialPage} />
            <Route path={"/fortran"} component={FortranNotFound} />
        </Switch>
            </div>
    )

    if (is_fortran) {
        return get_fortran_navigation()
    }
    return get_normal_navigation()
}