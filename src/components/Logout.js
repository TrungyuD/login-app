import React, { Component } from 'react';
import {Button,Nav} from 'react-bootstrap';
import './Sidebar.css';
class Logout extends Component {

    constructor(props) {
        super(props);
        
    }
    
    setLogout = (params)=> {
        return this.props.onLogout(params);
    }
    render() {
        return (
            <div>
                <div style={{textAlign:"right",padding:"10px 0px 10px 10px", borderBottom:"1px solid red"}}>
                    <Button   variant="outline-danger">
                        <Nav className="button-logout" ><Nav.Link href='/' style={{color:"greenyellow"}}>Logout</Nav.Link></Nav>
                    </Button>
                </div>
            </div>
        );
    }
}

export default Logout;