import logo from './logo.svg';
import './App.css';
import Obj1 from './component/Obj1';
import { Fragment } from 'react';

function App() {
  return (
  <Fragment>
    <div>
      <h1>Hola mundo.</h1>
      <Obj1 nombre = {"ivan"} apellido={"llanos"} />
    </div>
    
  </Fragment>
  );
}



export default App;
