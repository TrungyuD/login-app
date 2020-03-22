import React, { Component } from 'react';
import ListUserTable from './ListUserTable.js';
// import UserInfo from './UserInfo.js';
import Hello from '../Hello.js';
// import Logout from '../Logout.js';
import Sidebar from '../Sidebar.js';
import {Row,Col} from 'react-bootstrap';
class UserList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userDisplayInfo : []
        }
    }
    
    setUserInfo = (params) => {
        this.setState({
          userDisplayInfo : params
        })
      }
    render() {
        return (
            <div>
                <Hello />
                <Row>
                    <Col xs={2}>
                        <Sidebar />
                    </Col>
                    <Col xs={10} >
                        <ListUserTable />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default UserList;