import axios from "axios";
import React, {useRef} from "react";
import { useState } from 'react';
import ReactiveButton from 'reactive-button';

const Home=()=>{

  let addId=useRef();
  let addNombre=useRef();
  let addPrecio=useRef();
  let addColor=useRef();

  const botonAgregar=()=>{
    var idNuevoProducto = addId.current.value
    var nombreProducto = addNombre.current.value
    var precioProducto = addPrecio.current.value
    var colorProducto = addColor.current.value

    axios.post('https://hmftk6fuch.execute-api.us-east-1.amazonaws.com/prod/producto', {
      IdProducto:idNuevoProducto,
      //nombre:nombreProducto,
      precio:precioProducto,
      color:colorProducto
    }).then(res=>console.log('Posting data',res)).catch(err=>console.log(err));

    console.log(idNuevoProducto)
    //console.log(nombreProducto)
    console.log(precioProducto)
    console.log(colorProducto)
  }

  let deleteId=useRef();
  const botonEliminar=()=>{
    var borrarId = deleteId.current.value

    axios.delete('https://hmftk6fuch.execute-api.us-east-1.amazonaws.com/prod/producto', {
      data: {
      IdProducto: borrarId
      }
    }).then(res=>console.log('Posting data',res)).catch(err=>console.log(err));
    console.log(borrarId)
  }

  let editId=useRef();
  let editNombre=useRef();
  let editPrecio=useRef();
  let editColor=useRef();

  const botonEditar=()=>{
    var IdProducto = editId.current.value
    var nombreProducto = editNombre.current.value
    var precioProducto = editPrecio.current.value
    var colorProducto = editColor.current.value

    axios.patch('https://hmftk6fuch.execute-api.us-east-1.amazonaws.com/prod/producto', {
      IdProducto:IdProducto,
      updateKey:"precio",
      updateValue:precioProducto

    }).then(res=>console.log('Posting data',res)).catch(err=>console.log(err));

    console.log(IdProducto)
    console.log(nombreProducto)
    console.log(precioProducto)
    console.log(colorProducto)
  }

  return(
    <div>

      <div style={{position:'absolute',top:'10px'}}>
        <ReactiveButton size="small" color="dark" idleText="Agregar" onClick={botonAgregar}/>
      </div>
      <div>
        <input ref={addId} type="text" placeholder='idAgregar' style={{position:'absolute',top:'10px',left:'100px'}}/>
        <input ref={addNombre} type="text" placeholder='NombreAgregar' style={{position:'absolute',top:'30px',left:'100px'}}/>
        <input ref={addPrecio} type="text" placeholder='precioAgregar' style={{position:'absolute',top:'50px',left:'100px'}}/>
        <input ref={addColor} type="text" placeholder='colorAgregar' style={{position:'absolute',top:'70px',left:'100px'}}/>
      </div>

      <div style={{position:'absolute',top:'110px'}}>
      <ReactiveButton size="small" color="dark" idleText="Eliminar" onClick={botonEliminar}/>
      </div>
      <div style={{position:'absolute',top:'110px',left:'100px'}}>
        <input ref={deleteId} type="text" placeholder='idEliminar'/>
      </div>

      <div style={{position:'absolute',left:'350px'}}>
        <ReactiveButton size="small" color="dark" idleText="Editar" onClick={botonEditar}/>
      </div>

      <div>
        <input ref={editId} type="text" placeholder='id' style={{position:'absolute',top:'10px', left:'430px'}}/>
        <input ref={editNombre} type="text" placeholder='Nombre' style={{position:'absolute',top:'30px',left:'430px'}}/>
        <input ref={editPrecio} type="text" placeholder='precio' style={{position:'absolute',top:'50px', left:'430px'}}/>
        <input ref={editColor} type="text" placeholder='color' style={{position:'absolute',top:'70px', left:'430px'}}/>
        
      </div>
      <div>
        <a style={{position:'absolute',top:'160px'}} href="/listar_todo">
          <ReactiveButton size="small" color="dark" idleText="Listar Todo" />
        </a>
      </div>
    </div>
  );
}

export default Home;