import React, { useState } from 'react';
import '../App.css';
import './Submit.css';
function Submit(props) {
    const [inputValues, setInputValues] = useState({
      uname: '', psw: ''
    });
    const handleChange = event => {
      const { name, value } = event.target;
      setInputValues({ ...inputValues, [name]: value });
    };
      
    const handleSubmit=(event)=> {
        console.log('Username: ' + inputValues.uname + ' pass: ' + inputValues.psw);
        event.preventDefault();
        const url ='http://test.itechcorp.com.vn:38765/auth/oauth/token';
        let username = 'operation_portal';
        let password = 'iTech1234';
        let headers = new Headers();
        let formdata = new FormData();
        formdata.append('grant_type','password');
        formdata.append('username',inputValues.uname);
        formdata.append('password',inputValues.psw);
        headers.append('Authorization', 'Basic ' + btoa(username + ":" + password));
        fetch(url, { method: 'POST',
        body: formdata, 
        headers:headers})
        .then(res => {
          if (res.status === 200) {
            return res.json().then((data) => {  
              localStorage.setItem('access_token',data.access_token);
              localStorage.setItem('token_type',data.token_type);
              localStorage.setItem('username',inputValues.uname);
              props.history.push('/user-list');
            }); 
          }
        })
        .catch(error => console.error('Error:', error))
      }
      return (
            <div className="">
                <div style={{border:"1px solid red"}}>
                    <form action="" method='post' onSubmit={handleSubmit}>
                        <div className="container-fake container">
                        <div className="username">
                            <label htmlFor=""><b>Username:</b></label>
                            <input type="text" placeholder="Enter Username" 
                                  name="uname" value={inputValues.uname} 
                                  onChange={handleChange} required/>
                        </div>
                        <div>
                            <label htmlFor=""><b>Password:</b></label>
                            <input type="password" placeholder="Enter Password" 
                                  name="psw" value={inputValues.psw} 
                                  onChange={handleChange}  required/>
                        </div>
                        <div style={{display: "flex"}}>
                            <input type="submit" value="Login" className="button"/>
                        </div>
                        </div>
                    </form>
                </div>

              </div>
        );
    }


export default Submit;
