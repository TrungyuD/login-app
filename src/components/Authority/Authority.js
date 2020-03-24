import React, { useState, useEffect } from 'react';
import {Table} from 'react-bootstrap';
function Authority() {
    const [dataAuthority, setData] = useState([]);
    useEffect(()=>{
        const getTokenType = localStorage.getItem('token_type');
        const getAccessToken = localStorage.getItem('access_token');
        const url = 'http://test.itechcorp.com.vn:38765/auth/secured/ws/rest/v1/authority';
        let headers = new Headers();
        headers.append('Authorization', getTokenType +' '+ getAccessToken);
        fetch(url, { method: 'GET', headers:headers})
        .then(res => {
            return res.json().then((data)=>{
                setData(data.body);
                return
            })
        })
    })
    // const getData = () => {
    //     return dataAuthority.map((value,key)=>
    //         {
    //             return <tr className="" key={key} >
    //                 <td>{value.id}</td>
    //                 <td>{value.uuid}</td>
    //                 <td>{value.description}</td> 
    //                 </tr>
    //         }
    //     );
    // }
    return (
        <div>
            <div className="overflow-top-table">
                <Table style={{marginTop:"20px"}}>
                    <thead>
                        <tr>
                        <th>Mã</th>
                        <th>uuid</th>
                        <th>Mô tả</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataAuthority.map((value,key)=>
                            {
                                return <tr className="" key={key} >
                                    <td>{value.id}</td>
                                    <td>{value.uuid}</td>
                                    <td>{value.description}</td> 
                                    </tr>
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default Authority;