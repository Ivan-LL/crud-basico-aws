const Home=()=>{
    return(
        <div>
            <div>
              <button style={{position:'absolute'}} >Agregar</button>
              <input type="text" placeholder='id' style={{position:'absolute',top:'10px',left:'80px'}}/>
              <input type="text" placeholder='Nombre' style={{position:'absolute',top:'30px',left:'80px'}}/>
              <input type="text" placeholder='precio' style={{position:'absolute',top:'50px',left:'80px'}}/>
              <input type="text" placeholder='color' style={{position:'absolute',top:'70px',left:'80px'}}/>
            </div>

            <div>
              <button style={{position:'absolute',top:'110px'}}>Eliminar</button>
              <input type="text" placeholder='id'  style={{position:'absolute',top:'110px',left:'80px'}}/>
              <input type="text" placeholder='Nombre' style={{position:'absolute',top:'130px',left:'80px'}}/>
              <input type="text" placeholder='precio' style={{position:'absolute',top:'150px',left:'80px'}}/>
              <input type="text" placeholder='color' style={{position:'absolute',top:'170px',left:'80px'}}/>
            </div>

            <div>
              <button style={{position:'absolute',left:'350px'}}>Editar</button>
              <input type="text" placeholder='id' style={{position:'absolute',top:'10px', left:'410px'}}/>
              <input type="text" placeholder='Nombre' style={{position:'absolute',top:'30px',left:'410px'}}/>
              <input type="text" placeholder='precio' style={{position:'absolute',top:'50px', left:'410px'}}/>
              <input type="text" placeholder='color' style={{position:'absolute',top:'70px', left:'410px'}}/>
              
            </div>

        </div>

    );
}


export default Home;