import React from 'react';
import { Navbar } from "react-bootstrap";

const TopBar: React.SFC = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
            {'TASTE MOVIES'}
            </Navbar.Brand>
        </Navbar>
    );
}

export default TopBar;