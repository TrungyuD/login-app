import React, { Component } from 'react';
import {  Form, Button, Row, Col } from 'react-bootstrap';
// import Select from 'react-select';
import './Edit.css';
class Edit extends Component {
    constructor(props) {
        super(props);
        this.state= {
            username : '',
            email : '',
            phone : '',
            roleId : ["modality_resource_manager"],
            role:[],
            select : 'Select ...',
        }
    }
    UNSAFE_componentWillMount(){
        const userInfo = localStorage.getItem('user-info');
        const user = JSON.parse(userInfo);
        const role = JSON.parse(localStorage.getItem('role'));
        // console.log(role);
        return this.setState({
            username : user.username,
            email : user.email,
            phone : user.phoneNumber,
            role : role
        })
    }
    getRoleData = () => {
        const {role} =this.state;
        return role.map((value,key) => {
            return <option key={key} className="item-room-choice" 
                onClick={() => this.changeRoleValue(value.id,value.name)}>
                {value.name}
            </option>
        })
    }
    changeRoleValue = (id,name) => {
        this.setState({
            select : name,
            roleId : [id]
        })
        console.log(JSON.stringify(this.state.roleId));
        
    }
    handleChange = (event) => {
        this.setState({
          [event.target.name] : event.target.value
        });
      }
      onHandleSubmit = () => {
        var dataRole = {} ;
        const {username,email,phone,roleId} =this.state;
        dataRole.username = username;
        dataRole.email = email;
        dataRole.phone = phone;
        dataRole.roleId = roleId;
        console.log(JSON.stringify(dataRole));

        // return fetch('http://api.symfony-3.dev/app_dev.php/posts/', {
        //     method: 'PUT',
        //     mode: 'CORS',
        //     body: JSON.stringify(dataRole),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // }).then(res => {
        //     console.log(res.json());
        //     return res;
        // }).catch(err => err);
        // event.preventDefault();
        
    }
    render() {
        // const {username,email,phone} =this.state;
        return (
            <div style={{marginTop:"30px"}}>
                <div className="user-info-edit">
                    <p className="page-userinfo-text">Trang chỉnh sửa thông tin người dùng</p>
                    
                </div>
                <div className="table-user">
                    <Form action="" onSubmit={this.handleSubmit}>
                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                Tên đăng nhập
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control name="username" value={this.state.username} onChange={this.handleChange}  />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                Email
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control name="email" value={this.state.email} onChange={this.handleChange}  />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                SĐT
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control name="phone" value={this.state.phone} onChange={this.handleChange}  />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formGridState">
                            <Form.Label column sm="2">Vai trò</Form.Label>
                            <Col sm="10">
                                <Form.Control as="select" value="" >
                                    {this.getRoleData()}
                                </Form.Control>
                            </Col>                       
                        </Form.Group>
                    </Form>
                    <div style={{textAlign:"center"}}>
                            <Button  variant="success" onClick={()=>{this.onHandleSubmit()}} className="button-submit-edit" type="submit">
                                Submit
                            </Button>
                        </div>
                </div>
            </div>
        );
    }
}

export default Edit;