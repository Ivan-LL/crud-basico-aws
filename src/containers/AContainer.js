import react, {Component} from 'react';
import axios from 'axios';

class AContainer extends Component{
    componentDidMount(){
        axios.get('https://hmftk6fuch.execute-api.us-east-1.amazonaws.com/prod/productos')
        .then(result=>{
            console.log(result)
        }).catch(console.log)
    }

    render(){
        return(
            <h1>AWS App</h1>
        );
    }
}
export default AContainer;