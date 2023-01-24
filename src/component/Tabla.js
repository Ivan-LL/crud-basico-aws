import axios from 'axios';
import { FilterableTable } from 'react-filterable-table';
import {ReactDOM} from 'react'
const Tabla=()=>{

    const recuperarDatos=()=>{
        axios.get('https://hmftk6fuch.execute-api.us-east-1.amazonaws.com/prod/productos')
        .then(result=>{
            if(result.data){
                
                datos=result.data
                console.log(datos)
                const FilterableTable = require('react-filterable-table');
                return(
                    <div style={{position:'absolute',top:'200px'}}>
        
                        <hr></hr>
                        <FilterableTable style={{"border": "1px solid black"}}
                        initialSort="IdProducto"
                        fields={[
                            { name: 'IdProducto', displayName: "id", inputFilterable: true, sortable: true},
                            { name: 'nombre', displayName: "Nombre Producto", inputFilterable: false, sortable: true },
                            { name: 'color', displayName: "Color producto", inputFilterable: false, sortable: true },
                            { name: 'precio', displayName: "PrecioProducto", inputFilterable: false, sortable: true },
                        ] }
                        
                        />
                    </div>
                )
            }
        })
    }
    var datos = recuperarDatos();
}

export default Tabla;