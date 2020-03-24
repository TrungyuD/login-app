import React, { useState, useEffect } from 'react';
import {Navbar,Nav, Button} from 'react-bootstrap';
function Hello() {
    const [username, setUsername] = useState('');
    useEffect(()=>{
        var uname = localStorage.getItem('username');
        if (uname!=null) {
           return setUsername(uname);
        }
    },[]); 
    const deleteLocal = () => {
        localStorage.clear();
    }
    return (
        <div>
            <div className="" style={{backgroundColor:"#C3BFBC"}}>
                <Navbar fixed="top" style={{backgroundColor:"#C3BFBC",marginBottom:"300px"}}>
                    <Navbar.Brand href="/home">
                        <img className="logo" alt="logo" src="http://www.itechcorp.com.vn/wp-content/uploads/2019/03/xlogo-itech.png.pagespeed.ic.WcLBlatR2n.webp" />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text style={{marginRight:"20px"}}>
                        Bạn đang đăng nhập với tài khoản: <a href="#login">{username}</a>
                        </Navbar.Text>
                            <Button onClick={deleteLocal} variant="outline-secondary">
                                <Nav className="button-logout" >
                                    <Nav.Link href='/' style={{color:"white"}}>Logout</Nav.Link>
                                </Nav>
                            </Button>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
}
export default Hello;
