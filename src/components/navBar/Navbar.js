import React, {Component} from 'react';
import './Navbar.css'
import { NavLink } from "react-router-dom";
import ModalWindow from '../modalWindow/modalWindow'

class Navbar extends Component {
    
    state = {
        isOpen: false,
    }
    render(){
    return (
        <>
        <div className="navBar">
            <div className="navLogo">
            Масаж Самбір
            </div>
            <div className="navLinks">
            <NavLink  className="nav"  to="/">
                Про нас
            </NavLink>
            <NavLink  className="nav" to="/prices">
                Ціни
            </NavLink>
            <a className="nav" href="/reviews">
                Відгуки
            </a>
            <div className="navBuy" onClick={(e) => this.setState({ isOpen: true })}>
                Забронювати масаж
                </div>
             </div>          
        </div> 
        <ModalWindow isOpen={this.state.isOpen} isClose={(e) => this.setState({ isOpen: false })}/>
        </>
    );
    }
}

export default Navbar;