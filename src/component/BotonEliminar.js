import axios from "axios";
import React, {useRef} from "react";
import ReactiveButton from 'reactive-button';
const BotonEliminar = () =>{

    let deleteId=useRef();
    const confirmar=()=>{
      var borrarId = deleteId.current.value
      if(borrarId=='' || isNaN(borrarId)){
        alert("Debe ingresar el ID numerico del producto a borrar")
        document.location.reload();
      }else{
        axios.delete('https://hmftk6fuch.execute-api.us-east-1.amazonaws.com/prod/producto', {
            data: {
            IdProducto: borrarId
            }
          }).then(alert("Producto eliminado correctamente")).then(document.location.reload());
          
      }
 
    }
     

    return(
        <div>

            <div style={{position:'absolute',top:'110%',left:'180px'}}>
                <ReactiveButton size="small" color="dark" idleText="Eliminar" onClick={confirmar}/>
            </div>
            <div style={{position:'absolute',top:'110%'}}>
                <input ref={deleteId} type="text" placeholder='idEliminar'/>
            </div>

        </div>
    )

}

export default BotonEliminar;