import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import UserList from './components/UserList/UserList.js';
import ManageRole from './components/Role/ManageRole.js';
import ManageAuthority from './components/Authority/ManageAuthority.js';
import App from './App.js';
import Submit from './components/Submit.js';
import InfoUser from './components/InfoUser.js';
import UserEdit from './components/UserEdit/UserEdit.js';
import UserCreate from './components/UserCreate/UserCreate.js';
// import UserInfo from './components/UserList/UserInfo.js';
class Main extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Submit} />
                    <Route exact path='/home' component={App} />
                    <Route exact path='/user-list' component={UserList} />
                    <Route exact path='/user-list/user-info' component={InfoUser} />
                    <Route exact path='/user-list/edit' component={UserEdit} />
                    <Route exact path='/user-list/add' component={UserCreate} />
                    <Route exact path='/role' component={ManageRole} />
                    <Route exact path='/authority' component={ManageAuthority} />
                </Switch>
            </div>
        );
    }
}

export default Main;