import axios from "axios";
import React, {useRef} from "react";
import ReactiveButton from 'reactive-button';
const BotonAgregar=()=>{
    var puede_seguir=true;
    let addId=useRef();
    let addNombre=useRef();
    let addPrecio=useRef();
    let addColor=useRef();

    const confirmar=()=>{
        var idNuevoProducto = addId.current.value
        var nombreProducto = addNombre.current.value
        var precioProducto = addPrecio.current.value
        var colorProducto = addColor.current.value
        if(isNaN(idNuevoProducto) || idNuevoProducto==''){
            alert("El ID debe ser un número");
            puede_seguir=false;
        }

        if(nombreProducto==''){
            alert("Debe insertar el nombre del producto");
            puede_seguir=false;
        }
        if(precioProducto=='' || isNaN(precioProducto)){
            alert("El precio del producto debe ser un numero");
            puede_seguir=false;
        }

        if(colorProducto==''){
            alert("Debe ingresar el color del producto");
            puede_seguir=false;
        }

        if(puede_seguir==true){
          
        axios.post('https://hmftk6fuch.execute-api.us-east-1.amazonaws.com/prod/producto', {
        IdProducto:idNuevoProducto,
        nombre:nombreProducto,
        precio:precioProducto,
        color:colorProducto
        }).then(alert("Producto agregado correctamente")).then(res=>document.location.reload());
    
        }
        console.log(idNuevoProducto)
        console.log(nombreProducto)
        console.log(precioProducto)
        console.log(colorProducto)
        
        if(puede_seguir==false){
            document.location.reload();
        }
      }

      return(
        
        <div>

        <div style={{position:'absolute',top:'110%',left:'200px'}}>
          <ReactiveButton size="small" color="dark" idleText="Confirmar" onClick={confirmar}/>
        </div>
        <div>
          <input id="inputs" ref={addId} type="text" placeholder='idAgregar' style={{position:'absolute',top:'105%'}}/>
          <input id="inputs" ref={addNombre} type="text" placeholder='NombreAgregar' style={{position:'absolute',top:'110%'}}/>
          <input id="inputs" ref={addPrecio} type="text" placeholder='precioAgregar' style={{position:'absolute',top:'115%'}}/>
          <input id="inputs" ref={addColor} type="text" placeholder='colorAgregar' style={{position:'absolute',top:'120%'}}/>
        </div>

        </div>
    
      ) 
    
}

export default BotonAgregar;