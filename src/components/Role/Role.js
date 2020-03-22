import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
class Role extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataRole : []
        }
    }
    UNSAFE_componentWillMount(){
        const getTokenType = localStorage.getItem('token_type');
        const getAccessToken = localStorage.getItem('access_token');
        const url = 'http://test.itechcorp.com.vn:38765/auth/secured/ws/rest/v1/role';
        let headers = new Headers();
        headers.append('Authorization', getTokenType +' '+ getAccessToken);
        fetch(url, { method: 'GET', headers:headers})
        .then(res => {
            return res.json().then((data)=>{
                localStorage.setItem('role',JSON.stringify(data.body));
                this.setState({
                    dataRole : data.body    
                })
                // console.log(this.state.dataUserInfo);
                return
            })
            // console.log(res.json());
        })
    }
    getData = () => {
        const {dataRole} =this.state;
        return dataRole.map((value,key)=>
        {
            
                return <tr className="" key={key} >
                    <td>{value.id}</td>
                    <td>{value.name}</td>
                    <td>{value.description}</td> 
                    </tr>
        }
        );
    }
    
    render() {
        return (
            <div>
                <div className="">
                    <Table style={{marginTop:"20px"}} >
                        <thead>
                            <tr>
                            <th>Mã</th>
                            <th>Tên</th>
                            <th>Mô tả</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.getData()}
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default Role;