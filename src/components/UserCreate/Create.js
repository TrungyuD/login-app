import React, { Component } from 'react';
import {  Form, Button, Row, Col } from 'react-bootstrap';
class Create extends Component {
    constructor(props) {
        super(props);
        this.state= {
            username : '',
            email : '',
            phone : '',
            password : '',
            verifyPass: '',
            roleId : [],
            role:[],
            select : 'Select ...',
        }
    }
    UNSAFE_componentWillMount(){
        const role = JSON.parse(localStorage.getItem('role'));
        return this.setState({
            role : role
        })
    }
    getRoleData = () => {
        const {role} =this.state;
        return role.map((value,key) => {
            return <option key={key} className="item-room-choice" 
                onClick={(e) => this.changeRoleValue(value.id,value.name)}>
                {value.name}
            </option>
        })
    }
    handleChange = (event) => {
        this.setState({
          [event.target.name] : event.target.value
        });
      }
      handleSubmit = () => {
          const {password, verifyPass} =this.state;
          if (password !== verifyPass){
              alert('Xác nhận mật khẩu không đúng');
          }
          else {
              alert('oke');
          }
      }
    render() {
        return (
            <div>
                <div style={{marginTop:"30px"}}>
                    <div className="user-info-edit">
                        <p className="page-userinfo-text">Trang tạo thông tin người dùng</p>
                        
                    </div>
                    <div className="table-user">
                        <Form >
                            <Form.Group as={Row} controlId="formPlaintextEmail">
                                <Form.Label column sm="2">
                                    Tên đăng nhập
                                </Form.Label>
                                <Col sm="10">
                                <Form.Control name="username" value={this.state.username} onChange={this.handleChange} defaultValue={this.state.username} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formPlaintextEmail">
                                <Form.Label column sm="2">
                                    Mật khẩu
                                </Form.Label>
                                <Col sm="10">
                                <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleChange} defaultValue={this.state.phone} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formPlaintextEmail">
                                <Form.Label column sm="2">
                                    Xác thực mật khẩu
                                </Form.Label>
                                <Col sm="10">
                                <Form.Control type="password" name="verifyPass" value={this.state.verifyPass} onChange={this.handleChange}  />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formPlaintextEmail">
                                <Form.Label column sm="2">
                                    Email
                                </Form.Label>
                                <Col sm="10">
                                <Form.Control name="email" value={this.state.email} onChange={this.handleChange} />
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
                                <Form.Label column sm="2">State</Form.Label>
                                <Col sm="10">
                                    <Form.Control as="select" value="Choose..." >
                                        {this.getRoleData()}
                                    </Form.Control>
                                </Col>                       
                            </Form.Group>
                            <div style={{textAlign:"center"}}>
                                <Button  variant="success" onClick={()=>{this.handleSubmit()}} className="button-submit-edit" type="submit">
                                    Submit
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Create;