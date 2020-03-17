import React, { Component } from 'react';
import Hello from '../Hello.js';
import Logout from '../Logout.js';
import Sidebar from '../Sidebar.js';
import Role from './Role.js';
import {Row,Col} from 'react-bootstrap';
class ManageRole extends Component {
    render() {
        return (
            <div>
                <Hello />
                <Logout />
                <Row>
                    <Col xs={1}>
                        <Sidebar />
                    </Col>
                    <Col xs={11}>
                        <Role />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ManageRole;