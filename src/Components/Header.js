import React, {Component} from 'react';
import {Navbar,Nav,Container,Form,FormControl,Button} from 'react-bootstrap'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import logo from './logo-alpservis.png'
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contacts from "../Pages/Contacts";
class Header extends Component {
    render() {
        return (
            <>
            <Navbar collapseOnSelect expand="md" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            id="logotype"
                            src={logo}
                            height="60"
                            width="40"
                            className="d-inline-block align-top"
                            alt="Logo"
                            />

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id ="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/"> Главная </Nav.Link>
                                <Nav.Link href="/about"> О нас </Nav.Link>
                                <Nav.Link href="/contacts"> Контакты </Nav.Link>
                            </Nav>
                        <Form inline >
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="mr-md-5"
                            />
                        </Form>
                        <Button variant="primary">Search</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/contacts" component={Contacts}/>
                    </Switch>
                </Router>
            </>
        );
    }
}

export default Header;