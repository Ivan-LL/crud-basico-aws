import react, {Component, Fragment} from 'react';
import axios from 'axios';

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
                console.log(result)
            }
        })
    }

    render(){
        return(
            <div style={{position:'absolute',top:'200px'}}>
                <hr></hr>
                {
                    this.state.isLoading ?
                        "cargando"
                    :
                        this.state.productos.map(
                            (producto,index)=>{
                                return(
                                    <div key={index}>
                                        <p>
                                            <li>{producto.IdProducto+" "+producto.color+" "+producto.precio}</li>
                                        </p>
                                    </div>    
                                )
                            }
                        )
                }
            </div>
        )
    }
}
export default AContainer;