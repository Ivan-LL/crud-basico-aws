import Obj1 from './component/Obj1';
import { Component, Fragment } from 'react';
import AContainer from './containers/AContainer';
import Home from './component/Home'
import{BrowserRouter, Route, Routes} from "react-router-dom";
//path="/listar_todo" element =
class App extends Component {
  render(){
    return (
        <Fragment>
          <Home />
            <hr></hr>
          <BrowserRouter>
            <Routes>
              <Route path="/listar_todo" element ={<AContainer />}/>
              
            
            </Routes>
          </BrowserRouter>
          
        </Fragment>

          
        
      
    );
  }
}

export default App;