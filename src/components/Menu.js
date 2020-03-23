import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import ListUserTable from './UserList/ListUserTable.js';
import Sidebar from './Sidebar.js';
import Hello from './Hello.js';
import UserInfo from './UserList/UserInfo.js';
import Edit from './UserEdit/Edit.js';
import Create from './UserCreate/Create.js';
import Role from './Role/Role.js';
import Authority from './Authority/Authority.js';
class Menu extends Component {
    render() {
        return (
            <div>
                <Hello />
            <Row>
                <Col xs={2}>
                    <Sidebar />
                </Col>
                <Col xs={10} >
                    <Switch>
                        <Route exact path='/user-list' component={ListUserTable} />
                        <Route exact path='/user-list/user-info' component={UserInfo} />
                        <Route exact path='/user-list/edit' component={Edit} />
                        <Route exact path='/user-list/add' component={Create} />
                        <Route exact path='/role' component={Role} />
                        <Route exact path='/authority' component={Authority} />
                    </Switch>
                </Col>
            </Row>
            </div>
        );
    }
}

export default Menu;