import React, { Component } from 'react';
import {Nav,Button,Row,Col} from 'react-bootstrap';
import './Sidebar.css';
class Sidebar extends Component {
    render() {
        return (
            <div>
                <div className="sidebar">
                    <Nav defaultActiveKey="/" className="flex-column">
                        <Nav.Link href="/user-list">
                            <Button variant="outline-info">UserList</Button>
                        </Nav.Link>
                        <Nav.Link href="/role">
                            <Button variant="outline-info">Vai trò</Button>
                        </Nav.Link>
                        <Nav.Link href="authority">
                            <Button variant="outline-info">Phân quyền</Button>
                        </Nav.Link>
                    </Nav>
                </div>
            </div>
        );
    }
}

export default Sidebar;