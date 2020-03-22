import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import Hello from '../Hello.js';
import Sidebar from '../Sidebar.js';
import Create from './Create.js';
class UserCreate extends Component {
    render() {
        return (
            <div>
                <Hello />
                <Row>
                    <Col xs={2}>
                        <Sidebar />
                    </Col>
                    <Col xs={10} >
                        <Create />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default UserCreate;