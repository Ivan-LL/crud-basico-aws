import Obj1 from './component/Obj1';
import { Component, Fragment } from 'react';
import AContainer from './containers/AContainer';
import ReactiveButton from 'reactive-button';
import Home from './component/Home'
import BotonEliminar from './component/BotonEliminar'
import BotonAgregar from './component/BotonAgregar'
import{BrowserRouter, Route, Routes,Link} from "react-router-dom";
//path="/listar_todo" element =
class App extends Component {
  render(){
    return (
        <Fragment>
          <div style={{"height":"150.844px","width":"100%","background-color":"#11A2F5","display": "flex","align-items":"center","justify-content":'space-evenly'}}>
            <h2 style={{"text-align":"center",top:"150px"}}> LISTADO DE PRODUCTOS</h2>
          </div>
          <div style={{"height":"70.844px","width":"100%","background-color":"#000000","display": "flex","align-items":"center","justify-content":'space-evenly'}}>
          <a href="/listar_todo"><ReactiveButton size="small" color="dark" idleText="Lista productos" /></a>
          <ReactiveButton size="small" color="dark" idleText="Contacto"/>
          <ReactiveButton size="small" color="dark" idleText="Información"/>
          </div>
          <BrowserRouter>
          
          <Routes>

          <Route path="listar_todo" element={<AContainer/>}>
              <Route path="BotonAgregar" element={<BotonAgregar/>}/>
              <Route path="BotonEliminar" element={<BotonEliminar/>}/>
          </Route>
          

          </Routes>

          </BrowserRouter>

        </Fragment>
    );
  }
}

export default App;