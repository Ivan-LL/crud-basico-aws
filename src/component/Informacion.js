import React, {useRef} from "react";
import { Placeholder } from "react-bootstrap";
import ReactiveButton from 'reactive-button';
const Informacion = () =>{

    return(

        <div style={{position:'absolute',top:'225px',width:'100%'}}>
            {/* <h3 style={{textAlign:'center'}}>¡Su opinión es importante para nosotros, por favor, contáctenos!</h3>
            <h1 style={{position:'absolute',top:'205px',left:'680px', fontSize:'28px'}}>Nombre</h1>
            <h1 style={{position:'absolute',top:'256px',left:'700px', fontSize:'28px'}}>e-mail</h1>
            <h1 style={{position:'absolute',top:'308px',left:'675px', fontSize:'28px'}}>Mensaje</h1>
            <input ref={campo_nombre} style={{position:'absolute',top:'230px',left:'790px'}}></input>
            <input ref={campo_mail} style={{position:'absolute',top:'280px',left:'790px'}}></input>
            <textarea ref={campo_msg} style={{position:'absolute',top:'330px',left:'790px'}} id="zonamsg" name="zonamsg" rows="6" cols="50">
            </textarea>

            <ReactiveButton style={{position:'relative',top:'425px',left:'925px', width:'100'}}  size='little' color="dark" idleText="Enviar" onClick={respuesta}/> */}
        </div>
    )
}

export default Informacion;