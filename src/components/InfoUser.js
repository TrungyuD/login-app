import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import UserInfo from './UserList/UserInfo.js';
import Hello from './Hello.js';
import Sidebar from './Sidebar.js';
class InfoUser extends Component {
    render() {
        return (
            <div>
                <Hello />
                <Row>
                    <Col xs={2}>
                        <Sidebar />
                    </Col>
                    <Col xs={10} >
                        <UserInfo />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default InfoUser;