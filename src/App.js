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
          <div style={{"height":"50px","width":"100%","background-color":"#555"}}>
            <h2> LISTADO DE PRODUCTOS</h2>
          </div>
          <Home />
          <BrowserRouter>
            <Routes>
              <Route path="/listar_todo" element ={<AContainer/>}/>
              
            
            </Routes>
          </BrowserRouter>
          
        </Fragment>

          
        
      
    );
  }
}

export default App;