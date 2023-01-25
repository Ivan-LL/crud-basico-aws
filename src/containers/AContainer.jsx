import react, {Component, createElement, Fragment} from 'react';
import axios from 'axios';
import { FilterableTable } from 'react-filterable-table';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/lib/less/index.less'; // or 'rsuite-table/dist/css/rsuite-table.css'
import ReactiveButton from 'reactive-button';
import{BrowserRouter, Route, Routes,Link, Outlet} from "react-router-dom";
import { Button } from "react-bootstrap"
class AContainer extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            productos: [],
        };
    }
    
    componentDidMount(){
        axios.get('https://hmftk6fuch.execute-api.us-east-1.amazonaws.com/prod/productos')
        .then(result=>{
            if(result.data){
                
                this.setState({productos:result.data.productos,isLoading:false})
                
            }
        })
    }
    
    render(){
        const FilterableTable = require('react-filterable-table');
        return(
            <div style={{position:'absolute',top:'215px',width:'100%'}}>

                <hr></hr>
                <FilterableTable style={{"border": "1px solid black"}}
                initialSort="IdProducto"
                
                data={this.state.productos}
                
                
                fields={[
                    { name: 'IdProducto', displayName: "id", inputFilterable: true, sortable: true},
                    { name: 'nombre', displayName: "Nombre Producto", inputFilterable: false, sortable: true },
                    { name: 'color', displayName: "Color producto", inputFilterable: false, sortable: true },
                    { name: 'precio', displayName: "PrecioProducto", inputFilterable: false, sortable: true }, 
                ] }
                
                />
            
            <div>

            </div>
            <Button as={Link} to="BotonAgregar">Agregar</Button>            
            <Button as={Link} to="BotonEliminar">Eliminar</Button>
            <Button>Editar</Button>
            
            <div>
            <Outlet/>
            </div>

            </div>
            
        )
    }
}
export default AContainer;
/*
                {
                    this.state.isLoading ?
                        "cargando"
                    :
                        this.state.productos.map(
                            (producto,index)=>{
                                return(
                                    <div key={index}>
                                        
                                        <p>
                                            <li>{producto.IdProducto+" "+producto.nombre+" "+producto.color+" "+producto.precio}</li>
                                        </p>
                                    </div>    
                                )
                            }
                        )
                }
*/