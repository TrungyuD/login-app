import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import App from './App.js';
import Submit from './components/Submit.js';
import Menu from './components/Menu.js';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo : "Bạn chưa đăng nhập",
      displayUser: false,
      access_token:'',
      token_type:'',
      userDisplayInfo : {},
      renderSubmit : 'block',
      renderComponents: 'none'
    }
  }
  render(){
    return (
      <div className="App">
           <div>
              <Switch>
                  <Route exact path='/' component={Submit} />
                  <Menu />
              </Switch>
            </div>
      </div>
    )
  }
  
}
export default App;
