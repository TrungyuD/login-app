import React, { useState, useEffect } from 'react';
import {  Form, Button, Row, Col } from 'react-bootstrap';
// import Select from 'react-select';
import './Edit.css';
function Edit(props) {
    const [inputValues, setInputValues] = useState({
        username: '', email: '', phone: ''
      });
    const [role, setRole] = useState([]);
    const [roleId, setRoleId] =useState(["modality_resource_manager"]);
    const [roleName, setRoleName] =useState('');
    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('user-info'));
        // const roles = JSON.parse(user.roles);
        const role = JSON.parse(localStorage.getItem('role'));
        // const roles = JSON.stringify(user.roles);

        setInputValues({
            username : user.username,
            email : user.email,
            phone : user.phoneNumber
        } 
        );
        // console.log(inputValues.username);
        console.log(user.roles[0].name);
        setRoleName(user.roles[0].name);
        setRole(role);
    },[]);  
    const changeRoleValue = (event) => {
        console.log(event.target.value);
        setRoleId([event.target.value]);
    }
    const handleChange = event => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
      };
    const onHandleSubmit = () => {
        var dataRole = {} ;
        dataRole.username = inputValues.username;
        dataRole.email = inputValues.email;
        dataRole.phone = inputValues.phone;
        dataRole.roleId = roleId;
        console.log(JSON.stringify(dataRole));
    }
    return (
        <div style={{marginTop:"30px"}}>
            <div className="user-info-edit">
                <p className="page-userinfo-text">Trang chỉnh sửa thông tin người dùng</p>
            </div>
            <div className="table-user">
                <Form action="" style={{border:"none"}} onSubmit={onHandleSubmit}>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Tên đăng nhập
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control name="username" value={inputValues.username}  onChange={handleChange}  />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Email
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control name="email" value={inputValues.email}  onChange={handleChange}  />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            SĐT
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control name="phone" value={inputValues.phone} onChange={handleChange}  />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formGridState">
                        <Form.Label column sm="2">Vai trò</Form.Label>
                        <Col sm="10">
                            <Form.Control as="select" name="select"  onChange={changeRoleValue}>
                                {role.map((value,key) => {
                                    return <option key={key} className="item-room-choice" 
                                                    value={value.id}>
                                        {value.name}
                                    </option>
                                })}
                            </Form.Control>
                        </Col>                       
                    </Form.Group>
                </Form>
                <div style={{textAlign:"center"}}>
                        <Button  variant="success" onClick={onHandleSubmit} className="button-submit-edit" type="submit">
                            Submit
                        </Button>
                    </div>
            </div>
        </div>
    );
}
export default Edit;