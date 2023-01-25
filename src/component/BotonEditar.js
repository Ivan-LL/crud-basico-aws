import axios from "axios";
import React, {useRef} from "react";
import ReactiveButton from 'reactive-button';
const BotonEditar = () =>{

        var puede_seguir=true;
        let editId=useRef();
        let editNombre=useRef();
        let editPrecio=useRef();
        let editColor=useRef();
    
        const confirmar=()=>{
            var idNuevoProducto = editId.current.value
            var nombreProducto = editNombre.current.value
            var precioProducto = editPrecio.current.value
            var colorProducto = editColor.current.value
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
              
            alert("Proximamente");
            document.location.reload();
        
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
              <input id="inputs" ref={editId} type="text" placeholder='idEditar' style={{position:'absolute',top:'105%'}}/>
              <input id="inputs" ref={editNombre} type="text" placeholder='NombreEditar' style={{position:'absolute',top:'110%'}}/>
              <input id="inputs" ref={editPrecio} type="text" placeholder='precioEditar' style={{position:'absolute',top:'115%'}}/>
              <input id="inputs" ref={editColor} type="text" placeholder='colorEditar' style={{position:'absolute',top:'120%'}}/>
            </div>
    
            </div>
        
          ) 
        
    }    

export default BotonEditar;