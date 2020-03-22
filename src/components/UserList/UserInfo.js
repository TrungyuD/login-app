import React, { Component } from 'react';
import {Table,Button} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import './User.css';
class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user : []
        }
    }
    UNSAFE_componentWillMount(){
        const userInfo = localStorage.getItem('user-info');
        console.log(JSON.parse(userInfo));
        return this.setState({
            user : JSON.parse(userInfo)
        })
        
        
    }
    editUser = () => {
        this.props.history.push('/user-list/edit');
    }
    addUser = () => {
        this.props.history.push('/user-list/add');
    }
    render() {
        const {user} =this.state;
        const keyss=Object.keys(user);
        const elm = keyss.map((number)=>
            <tr>
                <td>{number}</td>
                <td>{JSON.stringify(user[number])}</td>
            </tr>
        )
        return (
            <div style={{marginTop:"30px"}}>
                <div className="user-info-edit">
                    <p className="page-userinfo-text">Trang thông tin người dùng</p>
                    <div>
                    <Button onClick={()=>{this.addUser()}} style={{marginRight:"30px"}} variant="success">Create User</Button>
                    <Button onClick={()=>{this.editUser()}} style={{marginRight:"141px",width:"100px"}} variant="success">Edit</Button>
                    </div>
                </div>
                <div className="table-user">
                    <Table className="table-user-info">
                        <thead>
                            <tr>
                                <th colSpan="2">Thông tin người dùng: {user.username}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {elm}
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default withRouter(UserInfo);