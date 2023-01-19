import Obj1 from './component/Obj1';
import { Component, Fragment } from 'react';
import AContainer from './containers/AContainer';
import Home from './component/Home'

class App extends Component {
  render(){
    return (
      <Fragment>
        <Home />
        
        <hr></hr>
        <AContainer />
      </Fragment>
    );
  }
}

export default App;