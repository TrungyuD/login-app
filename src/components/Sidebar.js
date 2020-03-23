import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
// import {Nav,Button,Row,Col} from 'react-bootstrap';
import './Sidebar.css';
class Sidebar extends Component {


    render() {
        return (
            <div>
                <div className="w3-sidebar  w3-bar-block" style={{backgroundColor:"#2BD0B9",marginTop:"74px"}}>
                    <h3 className="w3-bar-item">Menu</h3>
                    <NavLink to="/user-list" activeClassName="active" className="w3-bar-item w3-button" activeClassName="active">User List</NavLink>
                    <NavLink to="/role" className="w3-bar-item w3-button" activeClassName="active">Vai trò</NavLink>
                    <NavLink to="/authority" className="w3-bar-item w3-button" activeClassName="active">Phân quyền</NavLink>
                </div>
            </div>
        );
    }
}

export default Sidebar;