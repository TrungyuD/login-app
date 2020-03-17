import React, { Component } from 'react';

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
    render() {
        return (
            <div style={{textAlign:"right", border:"1px solid red"}}>
                Xin chào ({this.state.userName})
            </div>
        );
    }
}

export default Hello;
