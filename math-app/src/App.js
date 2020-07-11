import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Levels from './pages/Levels';
import Level from './pages/Level';

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid p-0">
        <Switch>
          <Route path={'/'} exact component={Home}/>
          <Route path={'/levels'} exact component={Levels}/>
          {/* <Route path={'/level'} component={Level}/> */}
          <Route path={'/level/:id'} exact  render={props => <Level {...props }/>}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
