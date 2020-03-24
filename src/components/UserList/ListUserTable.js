import React, { useState, useEffect } from 'react';
import {Table} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
// import { browserHistory } from 'react-router';
function ListUserTable(props) {
    // const CircularJSON = require('circular-json');
    const [dataUserInfo, setUserInfo] = useState([]);
    useEffect(()=>{
        const getTokenType = localStorage.getItem('token_type');
        const getAccessToken = localStorage.getItem('access_token');
        const url = 'http://test.itechcorp.com.vn:38765/auth/secured/ws/rest/v1/user';
        let headers = new Headers();
        headers.append('Authorization', getTokenType +' '+ getAccessToken);
        fetch(url, { method: 'GET', headers:headers})
        .then(res => {
            return res.json().then((data)=>{
                setUserInfo(data.body);
            })
        })
    },[])
    const dataUser = dataUserInfo.map((value,key)=>
    {
        if(value.person !==null){
            return <tr className="choose-user" 
            style={{textAlign:"center"}} key={key} 
            onClick={()=>{
                const json = JSON.stringify(value);
                localStorage.setItem('user-info',json);
                props.history.push('/user-list/user-info');
            }}>
                <td>{value.id}</td>
                <td>{value.username}</td>
                <td>{value.phoneNumber}</td> 
            </tr>
        }
    }
    )
    return (
        <div>
            <div className="table-list-user overflow-top-table">
                <Table style={{marginTop:"20px" }}>
                    <thead>
                        <tr>
                        <th>id</th>
                        <th>Username</th>
                        <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            dataUser
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
}


export default withRouter(ListUserTable);