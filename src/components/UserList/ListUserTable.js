import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
// import { browserHistory } from 'react-router';
class ListUserTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataUserInfo : []
        }
    }
    UNSAFE_componentWillMount(){
        console.log('list user table');
        
        const getTokenType = localStorage.getItem('token_type');
        const getAccessToken = localStorage.getItem('access_token');
        const url = 'http://test.itechcorp.com.vn:38765/auth/secured/ws/rest/v1/user';
        let headers = new Headers();
        headers.append('Authorization', getTokenType +' '+ getAccessToken);
        fetch(url, { method: 'GET', headers:headers})
        .then(res => {
            return res.json().then((data)=>{
                // console.log(JSON.stringify(data.body));
                
                this.setState({
                    dataUserInfo : data.body    
                })
                // console.log(this.state.dataUserInfo);
                
            })
            // console.log(res.json());
        })
    }
    getData = () => {
        const {dataUserInfo} =this.state;
        return dataUserInfo.map((value,key)=>
        {
            if(value.person !==null){
                // console.log(value);
                
                return <tr className="choose-user" style={{textAlign:"center"}} key={key} onClick={()=> {
                    this.onDislayInfo(value);
                }}>
                <td>{value.id}</td>
                <td>{value.username}</td>
                {/* <td>{value.email}</td> */}
                <td>{value.phoneNumber}</td> 
                </tr>
            }
        }
        );
    }
    onDislayInfo = (params) => {
        // console.log(params);
        localStorage.setItem('user-info',JSON.stringify(params));
       this.props.history.push('/user-list/user-info');
    }
    render() {
        return (
            <div>
                <div className="table-list-user">
                    <Table style={{marginTop:"20px" }}>
                        <thead>
                            <tr>
                            <th>id</th>
                            <th>Username</th>
                            {/* <th>email</th> */}
                            <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody >
                            {this.getData()}
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default withRouter(ListUserTable);