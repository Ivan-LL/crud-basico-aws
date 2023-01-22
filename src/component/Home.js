import React, {useRef} from "react";

const Home=()=>{

    let addId=useRef();
    let addNombre=useRef();
    let addPrecio=useRef();
    let addColor=useRef();
  
    const botonAgregar=()=>{
      var idProducto = addId.current.value
      var nombreProducto = addNombre.current.value
      var precioProducto = addPrecio.current.value
      var colorProducto = addColor.current.value

      console.log(idProducto)
      console.log(nombreProducto)
      console.log(precioProducto)
      console.log(colorProducto)
    }

    let deleteId=useRef();
    const botonEliminar=()=>{
      var idProducto = deleteId.current.value
      console.log(idProducto)
    }

    let editId=useRef();
    let editNombre=useRef();
    let editPrecio=useRef();
    let editColor=useRef();

    const botonAgregar=()=>{
      var idProducto = addId.current.value
      var nombreProducto = addNombre.current.value
      var precioProducto = addPrecio.current.value
      var colorProducto = addColor.current.value

      console.log(idProducto)
      console.log(nombreProducto)
      console.log(precioProducto)
      console.log(colorProducto)
    }

    return(
        <div>
            <div>
              <button style={{position:'absolute'}} onClick={botonAgregar} >Agregar</button>
              <input ref={addId} type="text" placeholder='idAgregar' style={{position:'absolute',top:'10px',left:'80px'}}/>
              <input ref={addNombre} type="text" placeholder='NombreAgregar' style={{position:'absolute',top:'30px',left:'80px'}}/>
              <input ref={addPrecio} type="text" placeholder='precioAgregar' style={{position:'absolute',top:'50px',left:'80px'}}/>
              <input ref={addColor} type="text" placeholder='colorAgregar' style={{position:'absolute',top:'70px',left:'80px'}}/>
            </div>

            <div>
              <button style={{position:'absolute',top:'110px'}} onClick={botonEliminar} >Eliminar</button>
              <input ref={deleteId} type="text" placeholder='idEliminar'  style={{position:'absolute',top:'110px',left:'80px'}}/>
            </div>

            <div>
              <button style={{position:'absolute',left:'350px'}}>Editar</button>
              <input ref={editId} type="text" placeholder='id' style={{position:'absolute',top:'10px', left:'410px'}}/>
              <input ref={editNombre} type="text" placeholder='Nombre' style={{position:'absolute',top:'30px',left:'410px'}}/>
              <input ref={editPrecio} type="text" placeholder='precio' style={{position:'absolute',top:'50px', left:'410px'}}/>
              <input ref={editColor} type="text" placeholder='color' style={{position:'absolute',top:'70px', left:'410px'}}/>
              
            </div>
            <div>
              <button style={{position:'absolute',top:'140px'}}>Listar Todo</button>
            </div>
        </div>

    );
}


export default Home;