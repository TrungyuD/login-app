import React, { Component } from 'react';
import ListUserTable from './ListUserTable.js';
import UserInfo from './UserInfo.js';
import Hello from '../Hello.js';
import Logout from '../Logout.js';
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
                <Logout />
                <Row>
                    <Col xs={1}>
                        <Sidebar />
                        
                        
                    </Col>
                    <Col xs={4}>
                        <ListUserTable  displayUserInfo={this.setUserInfo}/>
                    </Col>
                    <Col xs={7}>
                        <UserInfo onDisplayInfo={this.state.userDisplayInfo} />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default UserList;