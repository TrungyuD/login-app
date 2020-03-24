import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import App from './App.js';
import Submit from './components/Submit.js';
import Menu from './components/Menu.js';
function App() {
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
export default App;
