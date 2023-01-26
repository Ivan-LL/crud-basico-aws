import Obj1 from './component/Obj1';
import { Component, Fragment } from 'react';
import AContainer from './containers/AContainer';
import ReactiveButton from 'reactive-button';
import Home from './component/Home'
import Contacto from './component/Contacto'
import BotonEditar from './component/BotonEditar'
import BotonEliminar from './component/BotonEliminar'
import BotonAgregar from './component/BotonAgregar'
import{BrowserRouter, Route, Routes,Link} from "react-router-dom";
import { Button } from "react-bootstrap"
//path="/listar_todo" element =
class App extends Component {
  render(){
    return (
        <Fragment>
          <div style={{"height":"150.844px","width":"100%","background-color":"#11A2F5","display": "flex","justify-content":'space-evenly'}}>

             <a href="/"> <Button style={{width:"200vh",height:"15.8vh"}}> LISTADO DE PRODUCTOS </Button> </a>
             
          </div>
          <div style={{"height":"70.844px","width":"100%","background-color":"#000000","display": "flex","align-items":"center","justify-content":'space-evenly'}}>
          <a href="/listar_todo"><ReactiveButton size="small" color="dark" idleText="Lista productos" /></a>
          <a href="/contacto"><ReactiveButton size="small" color="dark" idleText="Contacto"/></a>
          <ReactiveButton size="small" color="dark" idleText="Información"/>
          </div>
          <BrowserRouter>
          
          <Routes>

          <Route path="listar_todo" element={<AContainer/>}>
              <Route path="BotonAgregar" element={<BotonAgregar/>}/>
              <Route path="BotonEliminar" element={<BotonEliminar/>}/>
              <Route path="BotonEditar" element={<BotonEditar/>}/>
          </Route>

          <Route path="contacto" element={<Contacto/>}/>
          

          </Routes>

          </BrowserRouter>

        </Fragment>
    );
  }
}

export default App;