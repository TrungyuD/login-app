import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Submit from './components/Submit.js';
import Hello from './components/Hello.js';
// import Logout from './components/Logout';
import Sidebar from './components/Sidebar.js';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo : "Bạn chưa đăng nhập",
      displayUser: false,
      access_token:'',
      token_type:'',
      userDisplayInfo : {},
      renderSubmit : 'block'
    }
  }
  onSetUser = (params,acToken,tokenType,isRender)=>{
    this.setState({
        userInfo : params,
        displayUser :true,
        access_token:acToken,
        token_type : tokenType,
        renderSubmit : isRender
    })}
    
  render(){
    return (
      <div className="App">
        <Hello />
        <div>
          <Sidebar />
        </div>
        <div>
        </div>
        
      </div>
    )
  }
  
}


export default App;
