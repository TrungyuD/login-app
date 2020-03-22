import React, { Component } from 'react';
import {Navbar,Nav, Button} from 'react-bootstrap';
export class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName : ''
        }
    }
    componentWillMount() {
        var uname = localStorage.getItem('username');
        if (uname!=null) {
            this.setState({
                userName:uname
            })
        }
    }
    // getUsername = () => {
    //     var uname = localStorage.getItem('username');
    //     if (uname!=null) return uname;
    // }
    deleteLocal = () => {
        localStorage.clear();
    }
    render() {
        return (
           <div>
               <div style={{backgroundColor:"#C3BFBC"}}>
                    <Navbar style={{backgroundColor:"#C3BFBC"}}>
                        <Navbar.Brand href="/home">
                            <img className="logo" alt="logo" src="http://www.itechcorp.com.vn/wp-content/uploads/2019/03/xlogo-itech.png.pagespeed.ic.WcLBlatR2n.webp" />
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text style={{marginRight:"20px"}}>
                            Bạn đang đăng nhập với tài khoản: <a href="#login">{this.state.userName}</a>
                            </Navbar.Text>
                                <Button onClick={()=>{this.deleteLocal()}} variant="outline-secondary">
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
}

export default Hello;
