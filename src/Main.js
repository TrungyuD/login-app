import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import UserList from './components/UserList/UserList.js';
import ManageRole from './components/Role/ManageRole.js';
import ManageAuthority from './components/Authority/ManageAuthority.js';
import App from './App.js';

class Main extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={App} />
                    <Route exact path='/user-list' component={UserList} />
                    <Route exact path='/role' component={ManageRole} />
                    <Route exact path='/authority' component={ManageAuthority} />
                </Switch>
            </div>
        );
    }
}

export default Main;