import Obj1 from './component/Obj1';
import { Component, Fragment } from 'react';
import AContainer from './containers/AContainer';

class App extends Component {
  render(){
    return (
      <Fragment>
        <div>
          <h1>Hola mundo.</h1>
          <Obj1 nombre = {"ivan"} apellido={"llanos"} />
          <AContainer />
        </div>
      </Fragment>
    );
  }
}

export default App;