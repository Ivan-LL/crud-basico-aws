import axios from "axios";
import React, {useRef} from "react";
import { useState } from 'react';
import ReactiveButton from 'reactive-button';

const Home=()=>{
    return(
      <div>
           <div style={{position:'absolute',left:'160px',top:'250px'}}>
        <p>
          <h1 style={{fontSize:"25px"}}>Pagina acerca del listado de productos</h1>
        </p>
        <p><i>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem libero, 
        <br></br>placerat eget tincidunt in, gravida nec elit. Vestibulum vulputate
        <br></br>id est et laoreet. Fusce posuere sem nisl, nec ullamcorper est viverra non. 
        <br></br>Donec condimentum velit sed nunc fringilla, id porttitor arcu fringilla. 
        <br></br>In hac habitasse platea dictumst. Phasellus sit amet turpis sit amet nisl. 
        <br></br>Nullam ligula felis, interdum ut egestas ut, tempor id turpisnunc aliquet. 
        <br></br>taciti blandit arcu metus nunc aliquet eget torquent facilisi, varius. 
        <br></br>dignissim magnis diam hendrerit morbi fringilla risus. Congue magna 
        <br></br>praesent ad nostra lobortis bibendum dignissim at eget felis in tellus
        <br></br>sollicitudin dapibus,Est vel magnis imperdiet nam parturient suscipit 
        <br></br>dapibus mollis tortor rutrum, orci neque senectus odio facilisis gravida 
        <br></br>eleifend habitasse quisque convallis et, suspendisse lobortis cras tristique 
        <br></br>ultricies accumsan mauris facilisi diam. Velit facilisis et pellentesque dui 
        <br></br>maecenas facilisi morbi mauris curae pulvinar platea mattis odio, imperdiet nunc 
        <br></br>enim egestas est sociis a inceptos volutpat conubia rhoncus.
        <br></br>Sed sagittis nisl libero, id elementum justo placerat a. Aenean congue, elit 
        <br></br>eu lobortis commodo, massa sapien vestibulum sem, id euismod velit augue 
        <br></br>vel lacus. Nam non tempor lectus. Quisque lobortis lorem non egestas luctus. 
        <br></br>Quisque nulla odio, gravida et pulvinar ut, faucibus sed neque. Interdum et 
        <br></br>malesuada fames ac ante ipsum primis in faucibus. Interdum et malesuada fames ac 
        <br></br>ante ipsum primis in faucibus. Nullam aliquam mi quis magna accumsan, 
        <br></br>nec lobortis purus mollis. Donec ut neque libero.
        </i></p>
        <br></br><br></br>
        <img src="caja.jpg" alt="caja" style={{width:'300px', height:'200px', position:'absolute', left:'85px'}} />
        </div>

        <div style={{position:'absolute',left:'900px',top:'355px'}}>
          <img src="imagenrelleno.png" style={{width:'800px',height:'1450x'}} />
        </div>
      </div>
      
    )
}

export default Home;