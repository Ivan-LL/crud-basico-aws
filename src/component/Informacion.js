import React, {useRef} from "react";
import { Placeholder } from "react-bootstrap";
import ReactiveButton from 'reactive-button';
const Informacion = () =>{

    return(
      <div style={{position: 'absolute', "height":"150.844px","width":"100%","display": "flex","vertical-align": "top","justify-content":"center","textAlign":"justify"}}>
        <div style={{background: 'aliceblue', padding: '15px', width: '400px',position:'relative'}}>
          <p>
            <h1 style={{fontSize:"25px"}}>Mi historia</h1>
          </p>
          <p style= {{fontSize:'15px'}}>Lorem ipsum odor amet, consectetuer adipiscing elit. Primis eros nunc fringilla id rutrum nibh.
          Orci convallis pulvinar urna fusce at purus neque nam leo? Suspendisse semper facilisi
          parturient sit euismod placerat. Orci ante luctus praesent torquent orci commodo aptent blandit.
          Placerat arcu dui potenti; nullam taciti taciti amet.
          </p>
          <p style= {{fontSize:'15px'}}>Lorem ipsum odor amet, consectetuer adipiscing elit. Primis eros nunc fringilla id rutrum nibh.
          Orci convallis pulvinar urna fusce at purus neque nam leo? Suspendisse semper facilisi
          parturient sit euismod placerat. Orci ante luctus praesent torquent orci commodo aptent blandit.
          Placerat arcu dui potenti; nullam taciti taciti amet.
          </p>
          <p style= {{fontSize:'15px'}}>Lorem ipsum odor amet, consectetuer adipiscing elit. Primis eros nunc fringilla id rutrum nibh.
          Orci convallis pulvinar urna fusce at purus neque nam leo? Suspendisse semper facilisi
          parturient sit euismod placerat. Orci ante luctus praesent torquent orci commodo aptent blandit.
          Placerat arcu dui potenti; nullam taciti taciti amet.
          </p>
        </div>

        <div style={{background: 'aliceblue', padding: '15px', width: '400px',position:'relative'}}>
          <p>
            <h1 style={{fontSize:"25px"}}>Servicios</h1>
          </p>
          <p style= {{fontSize:'15px'}}>Lorem ipsum odor amet, consectetuer adipiscing elit. Primis eros nunc fringilla id rutrum nibh.
          Orci convallis pulvinar urna fusce at purus neque nam leo? Suspendisse semper facilisi
          parturient sit euismod placerat. Orci ante luctus praesent torquent orci commodo aptent blandit.
          Placerat arcu dui potenti; nullam taciti taciti amet.
          </p>
          <img src="caja.jpg" style={{"justify-content":"center",width:'250px'}} />
        </div>

        <div style={{background: 'aliceblue', padding: '15px', width: '400px',position:'relative'}}>
          <p>
            <h1 style={{fontSize:"25px"}}>Misión</h1>
          </p>
          <p style= {{fontSize:'15px'}}>Lorem ipsum odor amet, consectetuer adipiscing elit. Primis eros nunc fringilla id rutrum nibh.
          Orci convallis pulvinar urna fusce at purus neque nam leo? Suspendisse semper facilisi
          parturient sit euismod placerat. Orci ante luctus praesent torquent orci commodo aptent blandit.
          Placerat arcu dui potenti; nullam taciti taciti amet.
          </p>
          <p>
            <h1 style={{fontSize:"25px"}}>Visión</h1>
          </p>
          <p style= {{fontSize:'15px'}}>Lorem ipsum odor amet, consectetuer adipiscing elit. Primis eros nunc fringilla id rutrum nibh.
          Orci convallis pulvinar urna fusce at purus neque nam leo? Suspendisse semper facilisi
          parturient sit euismod placerat. Orci ante luctus praesent torquent orci commodo aptent blandit.
          Placerat arcu dui potenti; nullam taciti taciti amet.
          </p>
        </div>
      </div>
    )
}

export default Informacion;