import React, {useRef} from "react";
import { Placeholder } from "react-bootstrap";
import ReactiveButton from 'reactive-button';
const Contacto = () =>{
    
    let campo_nombre=useRef();
    let campo_mail=useRef();
    let campo_msg=useRef();

    const respuesta = () =>{
        var nombre=campo_nombre.current.value;
        var mail=campo_nombre.current.value;
        var msg=campo_msg.current.value;

        if(nombre!='' && mail!='' && msg!=''){
            alert("Gracias por su mensaje!")
        }else{
            alert("Debe llenar todos los campos")
        }
        console.log(nombre);
        console.log(mail);
        console.log(msg);
        document.location.reload();
        
    }

    return(

        <div style={{position:'absolute',top:'225px',width:'100%'}}>
            <h3 style={{textAlign:'center'}}>¡Su opinión es importante para nosotros, por favor, contáctenos!</h3>
            <h1 style={{position:'absolute',top:'200px',left:'650px'}}>Nombre</h1>
            <h1 style={{position:'absolute',top:'250px',left:'635px'}}>Contacto</h1>
            <h1 style={{position:'absolute',top:'300px',left:'640px'}}>Mensaje</h1>
            <input ref={campo_nombre} style={{position:'absolute',top:'230px',left:'790px'}}></input>
            <input ref={campo_mail} style={{position:'absolute',top:'280px',left:'790px'}}></input>
            <textarea ref={campo_msg} style={{position:'absolute',top:'330px',left:'790px'}} id="zonamsg" name="zonamsg" rows="6" cols="50">
            </textarea>

            <ReactiveButton style={{position:'relative',top:'425px',left:'925px', width:'100'}}  size='little' color="dark" idleText="Enviar" onClick={respuesta}/>
        </div>
    )
}

export default Contacto;