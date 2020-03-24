import React, { useState, useEffect } from 'react';
import {  Form, Button, Row, Col } from 'react-bootstrap';
function Create() {
    const [role, setRole] =useState([]);
    // const [roleId, setRoleId] =useState([]);
    // const [select, setSelect]=useState('select...');
    const [inputValues, setInputValues] = useState({
        username: '', email: '', phone: '', password:'',verifyPass:''
      });
      const [roleId, setRoleId] =useState(["modality_resource_manager"]);
      const changeRoleValue = (event) => {
        console.log(event.target.value);
        setRoleId([event.target.value]);
    }
    // const roleLocal = JSON.parse(localStorage.getItem('role'));
    // const incre = () => setRole(roleLocal);
    useEffect(()=>{
        const roleLocal = JSON.parse(localStorage.getItem('role'));
        // debugger;
        if (roleLocal!=null) {
            return setRole(roleLocal);
         }
    },[]);
    const handleChange = event => {
        const { name, value } = event.target;
        // debugger;
        setInputValues({ ...inputValues, [name]: value });
      };
      const handleSubmit = () => {
          const password=inputValues.password;
          const verifyPass=inputValues.verifyPass;
          if (password !== verifyPass){
              alert('Xác nhận mật khẩu không đúng');
          }
          else {
              alert('oke');
          }
      }
        return (
            <div>
                <div style={{marginTop:"30px"}}>
                    <div className="user-info-edit">
                        <p className="page-userinfo-text">Trang tạo thông tin người dùng</p>
                        
                    </div>
                    <div className="table-user">
                        <Form style={{border:"none"}}>
                            <Form.Group as={Row} controlId="formPlaintextEmail">
                                <Form.Label column sm="2">
                                    Tên đăng nhập
                                </Form.Label>
                                <Col sm="10">
                                <Form.Control name="username" value={inputValues.username} onChange={handleChange} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formPlaintextEmail">
                                <Form.Label column sm="2">
                                    Mật khẩu
                                </Form.Label>
                                <Col sm="10">
                                <Form.Control type="password" name="password" value={inputValues.password} onChange={handleChange}  />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formPlaintextEmail">
                                <Form.Label column sm="2">
                                    Xác thực mật khẩu
                                </Form.Label>
                                <Col sm="10">
                                <Form.Control type="password" name="verifyPass" value={inputValues.verifyPass} onChange={handleChange}  />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formPlaintextEmail">
                                <Form.Label column sm="2">
                                    Email
                                </Form.Label>
                                <Col sm="10">
                                <Form.Control name="email" value={inputValues.email} onChange={handleChange} />
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
                                    <Form.Control as="select" name="select" onChange={changeRoleValue}>
                                        {role.map((value,key) => {
                                            return <option key={key} className="item-room-choice" 
                                                            value={value.id} >
                                                {value.name}
                                            </option>
                                        })}
                                    </Form.Control>
                                </Col>                       
                            </Form.Group>
                            <div style={{textAlign:"center"}}>
                                <Button  variant="success" onClick={handleSubmit} className="button-submit-edit" type="submit">
                                    Submit
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
export default Create;