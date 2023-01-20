const Home=()=>{

    
    
    return(
        <div>
            <div>
              <button style={{position:'absolute'}} >Agregar</button>
              <input type="text" placeholder='id' style={{position:'absolute',top:'9px',left:'80px'}}/>
              <input type="text" placeholder='precio' style={{position:'absolute',top:'29px',left:'80px'}}/>
              <input type="text" placeholder='color' style={{position:'absolute',top:'53px',left:'80px'}}/>
            </div>

            <div>
              <button style={{position:'absolute',top:'90px'}}>Eliminar</button>
              <input type="text" placeholder='id'  style={{position:'absolute',top:'90px',left:'80px'}}/>
              <input type="text" placeholder='precio' style={{position:'absolute',top:'110px',left:'80px'}}/>
              <input type="text" placeholder='color' style={{position:'absolute',top:'130px',left:'80px'}}/>
            </div>

            <div>
              <button style={{position:'absolute',left:'350px'}}>Editar</button>
              <input type="text" placeholder='id' style={{position:'absolute',top:'9px', left:'410px'}}/>
              <input type="text" placeholder='precio' style={{position:'absolute',top:'29px', left:'410px'}}/>
              <input type="text" placeholder='color' style={{position:'absolute',top:'53px', left:'410px'}}/>
            </div>

        </div>

    );
}


export default Home;