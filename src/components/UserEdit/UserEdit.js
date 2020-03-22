import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import Hello from '../Hello.js';
import Sidebar from '../Sidebar.js';
import Edit from './Edit.js';
class UserEdit extends Component {
    render() {
        return (
            <div>
                <Hello />
                <Row>
                    <Col xs={2}>
                        <Sidebar />
                    </Col>
                    <Col xs={10} >
                        <Edit />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default UserEdit;