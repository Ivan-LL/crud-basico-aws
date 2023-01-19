import Obj1 from './component/Obj1';
import { Component, Fragment } from 'react';
import AContainer from './containers/AContainer';
import Home from './component/Home'
import{BrowserRouter, Route, Routes} from "react-router-dom";

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Routes>  
          <Route path="/" element = {
            <Fragment>
              <Home />

                <hr></hr>
              <AContainer />
            </Fragment>
          }/>
          <Route path="/listar_todo" element = {
            <div>
              <h1>LISTANDO TODO</h1>
            </div>
          }/>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;