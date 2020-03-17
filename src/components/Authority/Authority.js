import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
class Authority extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataAuthority : []
        }
    }
    

    UNSAFE_componentWillMount(){
        const getTokenType = localStorage.getItem('token_type');
        const getAccessToken = localStorage.getItem('access_token');
        const url = 'http://test.itechcorp.com.vn:38765/auth/secured/ws/rest/v1/authority';
        let headers = new Headers();
        headers.append('Authorization', getTokenType +' '+ getAccessToken);
        fetch(url, { method: 'GET', headers:headers})
        .then(res => {
            return res.json().then((data)=>{
                this.setState({
                    dataAuthority : data.body    
                })
                // console.log(this.state.dataUserInfo);
                return
            })
            // console.log(res.json());
        })
    }
    getData = () => {
        const {dataAuthority} =this.state;
        return dataAuthority.map((value,key)=>
        {
            
                return <tr className="" key={key} >
                    <td>{value.id}</td>
                    <td>{value.uuid}</td>
                    <td>{value.description}</td> 
                    </tr>
        }
        );
    }

    render() {
        return (
            <div>
                <div className="">
                    <Table >
                        <thead>
                            <tr>
                            <th>Mã</th>
                            <th>uuid</th>
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

export default Authority;