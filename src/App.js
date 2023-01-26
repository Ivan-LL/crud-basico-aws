import Obj1 from './component/Obj1';
import { Component, Fragment } from 'react';
import AContainer from './containers/AContainer';
import ReactiveButton from 'reactive-button';
import Home from './component/Home'
import Contacto from './component/Contacto'
import Informacion from './component/Informacion'
import BotonEditar from './component/BotonEditar'
import BotonEliminar from './component/BotonEliminar'
import BotonAgregar from './component/BotonAgregar'
import{BrowserRouter, Route, Routes,Link} from "react-router-dom";
import { Button } from "react-bootstrap"

class App extends Component {
  render(){
    return (
        <Fragment>
          <div style={{"height":"150.844px","width":"100%","background-color":"#11A2F5","display": "flex","justify-content":'space-evenly'}}>

             <a href="/"> <Button style={{width:"200vh",height:"150.844px"}}> LISTADO DE PRODUCTOS </Button> </a>
             
          </div>
          <div style={{"height":"70.844px","width":"100%","background-color":"#000000","display": "flex","align-items":"center","justify-content":'space-evenly'}}>
            <a href="/listar_todo"><ReactiveButton size="small" color="dark" idleText="Lista productos" /></a>
            <a href="/contacto"><ReactiveButton size="small" color="dark" idleText="Contacto"/></a>
            <a href="/informacion"><ReactiveButton size="small" color="dark" idleText="Información"/></a>
          </div>
          <BrowserRouter>
          
          <Routes>

          <Route path="/" element={<Home/>}/> 

          <Route path="listar_todo" element={<AContainer/>}>
            <Route path="BotonAgregar" element={<BotonAgregar/>}/>
            <Route path="BotonEliminar" element={<BotonEliminar/>}/>
            <Route path="BotonEditar" element={<BotonEditar/>}/>
          </Route>

            <Route path="contacto" element={<Contacto/>}/>
            <Route path="informacion" element={<Informacion/>}/>
          

          </Routes>

          </BrowserRouter>

        </Fragment>
    );
  }
}

export default App;