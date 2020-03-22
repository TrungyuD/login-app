import React, { Component } from 'react';
// import {Nav,Button,Row,Col} from 'react-bootstrap';
import './Sidebar.css';
class Sidebar extends Component {
    render() {
        return (
            <div>
                <div className="w3-sidebar  w3-bar-block" style={{backgroundColor:"#2BD0B9"}}>
                    <h3 className="w3-bar-item">Menu</h3>
                    <a href="/user-list" className="w3-bar-item w3-button">User List</a>
                    <a href="/role" className="w3-bar-item w3-button">Vai trò</a>
                    <a href="/authority" className="w3-bar-item w3-button">Phân quyền</a>
                </div>
            </div>
        );
    }
}

export default Sidebar;